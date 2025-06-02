import { FlatList, View, StyleSheet } from 'react-native'
import { useCubeStore } from '@/store/useCubeStore'
import { Cube } from './cube'

export function CubeList() {
  const { cubes } = useCubeStore()

  return (
    <FlatList
      data={cubes}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Cube
            name={item.name}
            value={item.value}
            lastUpdated={item.lastUpdated}
          />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 100,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
})
