// src/services/mqtt.ts
import { connect, MqttClient } from 'mqtt'
import { useBrokerStore } from '@/store/useBrokerStore'
import { useCubeStore } from '@/store/useCubeStore'

let mqttClient: MqttClient | null = null

export function initMqttConnection() {
  const { brokerUrl } = useBrokerStore.getState()
  const { cubes, updateCubeValue } = useCubeStore.getState()

  if (mqttClient) {
    mqttClient.end()
  }

  mqttClient = connect(brokerUrl)

  mqttClient.on('connect', () => {
    console.log('[MQTT] Conectado ao broker:', brokerUrl)

    cubes.forEach((cube) => {
      mqttClient?.subscribe(cube.topic, (err: Error | null) => {
        if (!err) {
          console.log(`[MQTT] Inscrito em ${cube.topic}`)
        } else {
          console.warn(`[MQTT] Erro ao inscrever em ${cube.topic}`, err)
        }
      })
    })
  })

  mqttClient.on('message', (topic: string, message: Buffer) => {
    const value = message.toString()
    const cube = useCubeStore.getState().cubes.find((c) => c.topic === topic)
    if (cube) {
      updateCubeValue(cube.id, value)
    }
  })

  mqttClient.on('error', (err: Error) => {
    console.error('[MQTT] Erro:', err)
  })
}

export function disconnectMqtt() {
  mqttClient?.end()
  mqttClient = null
}
