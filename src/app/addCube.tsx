// app/add-cube.tsx
import { View, StyleSheet, Alert } from 'react-native'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useState } from 'react'
import { useCubeStore } from '@/store/useCubeStore'
import { initMqttConnection } from '@/service/mqtt'
import { router } from 'expo-router'
import { v4 as uuidv4 } from 'uuid'

export default function AddCube() {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('')
  const { addCube } = useCubeStore()

  function handleSave() {
    if (!name || !topic) {
      return Alert.alert('Preencha todos os campos!')
    }

    addCube({
      id: uuidv4(),
      name,
      topic,
    })

    initMqttConnection()
    router.back()
  }

  return (
    <View style={styles.container}>
      <Input placeholder="Nome do Cubo" onChangeText={setName} />
      <Input placeholder="Tópico MQTT" onChangeText={setTopic} />
      <Button title="Salvar Cubo" onPress={handleSave} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 16,
    justifyContent: 'center',
  },
})
