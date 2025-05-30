// src/components/cube/Cube.tsx
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  name: string
  value: string
  lastUpdated: string
}

export function Cube({ name, value, lastUpdated }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.date}>{lastUpdated}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 8,
    width: '100%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 24,
    fontWeight: '600',
    color: '#E15610',
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
})
