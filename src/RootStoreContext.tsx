import React from 'react'
import { createContext, useContext } from 'react'
import RootStore from './stores/RootStore'

const RootStoreContext = createContext<RootStore>(new RootStore())

export const RootStoreProvider: React.FC = ({ children }) => (
  <RootStoreContext.Provider value={new RootStore()}>
    {children}
  </RootStoreContext.Provider>
)
export function useRootStore() {
  const rootStore = useContext(RootStoreContext)
  return rootStore
}
