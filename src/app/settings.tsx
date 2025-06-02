import { View, StyleSheet, Text } from 'react-native'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useBrokerStore } from '@/store/useBrokerStore'
import { useState } from 'react'
import { initMqttConnection } from '@/services/mqtt'
import { BottomBar } from '@/components/bottomBar/bottomBar'

export default function Settings() {
  const { brokerUrl, setBrokerUrl } = useBrokerStore()
  const [url, setUrl] = useState(brokerUrl)

  function handleSave() {
    setBrokerUrl(url)
    initMqttConnection()
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Configurar Broker MQTT</Text>

        <Input
          placeholder="Endereço do Broker"
          value={url}
          onChangeText={setUrl}
        />

        <Button title="Salvar Conexão" onPress={handleSave} />
      </View>

      <BottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
})
