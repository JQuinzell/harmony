import { useRootStore } from '../RootStoreContext'
import { CreateServer } from './interfaces'

export function useServerStore() {
  const rootStore = useRootStore()
  return {
    joinedServers: rootStore.joinedServers,
    currentServer: rootStore.currentServer,
    createServer(data: CreateServer) {
      return rootStore.createServer(data)
    },
    selectServer(title: string) {
      return rootStore.selectServer(title)
    },
    postMessage(text: string) {
      return rootStore.postMessage(text)
    },
    login(username: string, password: string) {
      return rootStore.login(username, password)
    },
  }
}
