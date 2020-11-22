import React from 'react'
import { createContext, useContext } from 'react'
import RootStore from './stores/RootStore'

const RootStoreContext = createContext<RootStore | undefined>(undefined)

export const RootStoreProvider: React.FC = ({ children }) => (
  <RootStoreContext.Provider value={new RootStore()}>
    {children}
  </RootStoreContext.Provider>
)
export function useRootStore() {
  const rootStore = useContext(RootStoreContext)
  if (!rootStore) throw new Error('RootStore not provided')
  return rootStore
}
