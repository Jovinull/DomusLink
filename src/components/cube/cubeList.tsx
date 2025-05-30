// src/components/cube/CubeList.tsx
import { FlatList } from 'react-native'
import { useCubeStore } from '@/store/useCubeStore'
import { Cube } from './cube'

export function CubeList() {
  const { cubes } = useCubeStore()

  return (
    <FlatList
      data={cubes}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 32 }}
      renderItem={({ item }) => (
        <Cube
          name={item.name}
          value={item.value}
          lastUpdated={item.lastUpdated}
        />
      )}
    />
  )
}
