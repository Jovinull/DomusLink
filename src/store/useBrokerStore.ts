import { create } from 'zustand'

type BrokerStore = {
  brokerUrl: string
  setBrokerUrl: (url: string) => void
}

export const useBrokerStore = create<BrokerStore>((set) => ({
  brokerUrl: 'wss://3a0402e73e714189a5fdf292baf01769.s1.eu.hivemq.cloud:8884/mqtt',
  setBrokerUrl: (url) => set({ brokerUrl: url }),
}))
