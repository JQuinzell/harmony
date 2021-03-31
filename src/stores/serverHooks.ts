import { useRootStore } from '../RootStoreContext'

export function useServerStore() {
  const rootStore = useRootStore()
  return {
    joinedServers: rootStore.joinedServers,
    currentServer: rootStore.currentServer,
    servers: rootStore.servers,
    createServer: rootStore.createServer.bind(rootStore),
    selectServer: rootStore.selectServer.bind(rootStore),
    postMessage: rootStore.postMessage.bind(rootStore),
    joinServer: rootStore.joinServer.bind(rootStore),
    login: rootStore.login.bind(rootStore),
  }
}
