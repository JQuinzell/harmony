import React from 'react'
import ReactDOM from 'react-dom'
import { RootStoreProvider } from './RootStoreContext'
import { Routes } from './components/Routes'

ReactDOM.render(
  <RootStoreProvider>
    <Routes />
  </RootStoreProvider>,
  document.getElementById('app')
)
