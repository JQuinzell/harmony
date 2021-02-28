import { render } from '@testing-library/react'
import { RootStoreProvider } from './RootStoreContext'
import React from 'react'

export function renderWithProviders(element: React.ReactElement) {
  return render(<RootStoreProvider>{element}</RootStoreProvider>)
}
