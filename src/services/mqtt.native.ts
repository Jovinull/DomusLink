import { connect, MqttClient } from '@taoqf/react-native-mqtt'
import { useBrokerStore } from '@/store/useBrokerStore'
import { useCubeStore } from '@/store/useCubeStore'

let mqttClient: MqttClient | null = null

export function initMqttConnection() {
  const { brokerUrl } = useBrokerStore.getState()
  const { cubes, updateCubeValue } = useCubeStore.getState()

  if (mqttClient) {
    mqttClient.end()
  }

  mqttClient = connect(brokerUrl, {
    username: 'jovinull',
    password: 'Secret123',
    reconnectPeriod: 5000,
    clientId: `app-client-${Math.random().toString(16).substr(2, 8)}`
  })

  mqttClient.on('connect', () => {
    cubes.forEach((cube) => {
      mqttClient?.subscribe(cube.topic)
    })
  })

  mqttClient.on('message', (topic, message) => {
    const value = message.toString()
    const cube = useCubeStore.getState().cubes.find((c) => c.topic === topic)
    if (cube) {
      updateCubeValue(cube.id, value)
    }
  })
}

export function disconnectMqtt() {
  if (mqttClient) {
    mqttClient.end()
    mqttClient = null
  }
}
