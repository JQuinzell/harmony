import { useRootStore } from '../RootStoreContext'
import { CreateServer } from './interfaces'

export function useServerStore() {
  const rootStore = useRootStore()
  return {
    rootStore,
    createServer(data: CreateServer) {
      return rootStore.createServer(data)
    },
    selectServer(title: string) {
      return rootStore.selectServer(title)
    },
  }
}
