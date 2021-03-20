import React from 'react'
import { renderWithProviders } from 'src/testUtils'
import { ServerButton } from './ServerButton'
import { screen } from '@testing-library/react'

describe('ServerButton', () => {
  const title = 'Server Title'
  const defaultProps = { title }
  const init = (overrides?: Partial<typeof defaultProps>) =>
    renderWithProviders(<ServerButton {...defaultProps} {...overrides} />)

  it('displays button', () => {
    init()

    const button = screen.getByRole('button', { name: title })

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(new RegExp(`^${title.slice(0, 2)}$`))
  })
})
