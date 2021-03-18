import { useRootStore } from '../RootStoreContext'
import { CreateServer } from './interfaces'

export function useServerStore() {
  const rootStore = useRootStore()
  return {
    createServer(data: CreateServer) {
      return rootStore.createServer(data)
    },
  }
}
