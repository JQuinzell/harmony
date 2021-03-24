import { render } from '@testing-library/react'
import { RootStoreProvider } from './RootStoreContext'
import React from 'react'
import { MemoryRouter } from 'react-router'

export function renderWithProviders(element: React.ReactElement) {
  return render(
    <RootStoreProvider>
      <MemoryRouter>{element}</MemoryRouter>
    </RootStoreProvider>
  )
}
