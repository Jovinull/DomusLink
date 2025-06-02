import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function BottomBar() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom || 12 }]}>
      <TouchableOpacity onPress={() => router.push('/menu')}>
        <Ionicons name="menu" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/')}>
        <Ionicons name="home" size={24} color="#333" />
      </TouchableOpacity>


      <View style={styles.spacer} />

      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => router.push('/addCube')}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity onPress={() => router.push('/lock')}>
        <Ionicons name="lock-closed" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/settings')}>
        <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    zIndex: 100,
    shadowColor: 'transparent',
    elevation: 0,
  },
  plusButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    elevation: 6,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 12 + (Platform.OS === 'ios' ? 12 : 0),
  },
  spacer: {
    width: 32,
  },
})
