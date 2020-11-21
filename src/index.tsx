import React from 'react'
import ReactDOM from 'react-dom'
import { RootStoreProvider } from './RootStoreContext'
import { Routes } from './components/Routes'
import { configure } from 'mobx'

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
})

ReactDOM.render(
  <RootStoreProvider>
    <Routes />
  </RootStoreProvider>,
  document.getElementById('app')
)
