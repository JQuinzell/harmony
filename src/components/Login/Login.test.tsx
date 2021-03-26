import React from 'react'
import { Login } from './Login'
import { renderWithProviders } from '~/testUtils'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { useServerStore } from '~/stores/serverHooks'
import { useServerStore as mockUseServerStore } from '~/stores/__mocks__/serverHooks'

jest.mock('~/stores/serverHooks')

describe('Login', () => {
  const init = () => renderWithProviders(<Login />)
  const { login } = (useServerStore as typeof mockUseServerStore)()
  const userInput = () => screen.getByLabelText('username')
  const passwordInput = () => screen.getByLabelText('password')
  const signupButton = () => screen.getByRole('button', { name: /sign up/i })

  it('should display Login page', () => {
    init()

    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(userInput()).toBeInTheDocument()
    expect(passwordInput()).toBeInTheDocument()
    expect(signupButton()).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /register/i })).toHaveAttribute(
      'href',
      '/register'
    )
  })

  it('should login when you fill out information', async () => {
    init()

    userEvent.type(userInput(), 'username')
    userEvent.type(passwordInput(), 'password')
    userEvent.click(signupButton())

    expect(login).toBeCalledWith('username', 'password')
  })

  it('should show error message if error', async () => {
    login.mockRejectedValue(undefined)
    init()

    userEvent.click(signupButton())

    expect(
      await screen.findAllByText(/Invalid username or password/i)
    ).toHaveLength(2)
  })
})
