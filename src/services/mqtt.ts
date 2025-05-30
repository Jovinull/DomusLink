import { Platform } from 'react-native'

// Faz o require dinâmico com base na plataforma
let mqtt: {
  initMqttConnection: () => void
  disconnectMqtt: () => void
}

if (Platform.OS === 'web') {
  mqtt = require('./mqtt.web')
} else {
  mqtt = require('./mqtt.native')
}

export const initMqttConnection = mqtt.initMqttConnection
export const disconnectMqtt = mqtt.disconnectMqtt
