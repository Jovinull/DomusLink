import { create } from 'zustand'

type Cube = {
  id: string
  name: string
  topic: string
  value: string
  lastUpdated: string
}

type CubeStore = {
  cubes: Cube[]
  addCube: (cube: Omit<Cube, 'value' | 'lastUpdated'>) => void
  updateCubeValue: (id: string, value: string) => void
  removeCube: (id: string) => void
}

export const useCubeStore = create<CubeStore>((set) => ({
  cubes: [],
  
  addCube: (cube) =>
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          ...cube,
          value: '—', // valor inicial
          lastUpdated: '—', // valor inicial
        },
      ],
    })),

  updateCubeValue: (id, value) =>
    set((state) => ({
      cubes: state.cubes.map((cube) =>
        cube.id === id
          ? {
              ...cube,
              value,
              lastUpdated: new Date().toLocaleString(),
            }
          : cube
      ),
    })),

  removeCube: (id) =>
    set((state) => ({
      cubes: state.cubes.filter((cube) => cube.id !== id),
    })),
}))
