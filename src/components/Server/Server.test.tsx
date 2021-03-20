import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '~/testUtils'
import { Server } from './Server'

describe('Server', () => {
  const init = () => renderWithProviders(<Server />)
  it('should display comments and a text field', () => {
    init()

    expect(screen.getByPlaceholderText(/enter a message/i)).toBeInTheDocument()
  })
})
