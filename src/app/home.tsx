import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { CubeList } from '@/components/cube/cubeList'
import { router } from 'expo-router'

export default function Home() {
  return (
    <View style={styles.container}>
      <CubeList />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('./addCube')}
      >
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settings}
        onPress={() => router.push('./settings')}
      >
        <Text style={styles.settingsText}>⚙️</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    backgroundColor: '#E15610',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    fontSize: 28,
    color: '#fff',
  },
  settings: {
    position: 'absolute',
    top: 40,
    right: 24,
  },
  settingsText: {
    fontSize: 22,
  },
})
