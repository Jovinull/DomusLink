import { create } from 'zustand'

type BrokerStore = {
  brokerUrl: string
  setBrokerUrl: (url: string) => void
}

export const useBrokerStore = create<BrokerStore>((set) => ({
  brokerUrl: 'mqtt://broker.hivemq.com', // valor padrão
  setBrokerUrl: (url) => set({ brokerUrl: url }),
}))
