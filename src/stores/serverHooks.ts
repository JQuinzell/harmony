import { useRootStore } from '../RootStoreContext'

export function useServerStore() {
  const rootStore = useRootStore()
  return {
    joinedServers: rootStore.joinedServers,
    currentServer: rootStore.currentServer,
    servers: rootStore.servers,
    createServer: rootStore.createServer,
    selectServer: rootStore.selectServer,
    postMessage: rootStore.postMessage,
    joinServer: rootStore.joinServer,
    login: rootStore.login,
  }
}
