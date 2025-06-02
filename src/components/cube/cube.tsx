// src/components/cube/Cube.tsx
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const CARD_WIDTH = (Dimensions.get('window').width - 64) / 2

type Props = {
  name: string
  value: string
  lastUpdated: string
}

export function Cube({ name, value, lastUpdated }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.date}>{lastUpdated}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E15610',
    marginBottom: 4,
  },
  date: {
    fontSize: 10,
    color: '#999',
  },
})
