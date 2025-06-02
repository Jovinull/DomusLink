import { Stack } from 'expo-router'
import { BottomBar } from '@/components/bottomBar/bottomBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, StyleSheet } from 'react-native'

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <Stack screenOptions={{ headerShown: false }} />
        <BottomBar />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
})
