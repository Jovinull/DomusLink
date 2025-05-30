// src/services/mqtt.web.ts
import mqtt, { MqttClient } from 'mqtt'
import { useBrokerStore } from '@/store/useBrokerStore'
import { useCubeStore } from '@/store/useCubeStore'

let mqttClient: MqttClient | null = null

export function initMqttConnection() {
  const { brokerUrl } = useBrokerStore.getState()
  const { cubes, updateCubeValue } = useCubeStore.getState()

  if (mqttClient) {
    mqttClient.end()
  }

  mqttClient = mqtt.connect(brokerUrl) // ex: ws://broker.hivemq.com:8000/mqtt

  mqttClient.on('connect', () => {
    console.log('[MQTT - web] Conectado ao broker:', brokerUrl)
    cubes.forEach((cube) => {
      mqttClient?.subscribe(cube.topic)
    })
  })

  mqttClient.on('message', (topic, message) => {
    const value = message.toString()
    const cube = useCubeStore.getState().cubes.find((c) => c.topic === topic)
    if (cube) updateCubeValue(cube.id, value)
  })
}

export function disconnectMqtt() {
  mqttClient?.end()
  mqttClient = null
}
