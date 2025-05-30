// app/settings.tsx
import { View, StyleSheet } from 'react-native'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useBrokerStore } from '@/store/useBrokerStore'
import { useState } from 'react'
import { initMqttConnection } from '@/service/mqtt'
import { router } from 'expo-router'

export default function Settings() {
  const { brokerUrl, setBrokerUrl } = useBrokerStore()
  const [url, setUrl] = useState(brokerUrl)

  function handleSave() {
    setBrokerUrl(url)
    initMqttConnection()
    router.back()
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Endereço do Broker"
        value={url}
        onChangeText={setUrl}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 16,
  },
})
