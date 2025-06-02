import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { CubeList } from '@/components/cube/cubeList'
import { router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { BottomBar } from '@/components/bottomBar/bottomBar'

export default function Home() {
  return (
    <View style={styles.container}>
      <CubeList />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 80,
  },
  settings: {
    position: 'absolute',
    top: 40,
    right: 24,
    zIndex: 101,
  },
})
