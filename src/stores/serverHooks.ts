import { useRootStore } from '../RootStoreContext'

export function useServerStore() {
  const rootStore = useRootStore()
  return {
    joinedServers: rootStore.joinedServers,
    currentServer: rootStore.currentServer,
    createServer: rootStore.createServer,
    selectServer: rootStore.selectServer,
    postMessage: rootStore.postMessage,
    login: rootStore.login,
  }
}
