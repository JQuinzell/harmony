import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '~/testUtils'
import { Server } from './Server'
import { selectServerQuery } from '~/mocks/data'
import { useServerStore } from '~/stores/serverHooks'
import userEvent from '@testing-library/user-event'

jest.mock('~/stores/serverHooks')

describe('Server', () => {
  const init = () => renderWithProviders(<Server />)
  const getInput = () => screen.getByPlaceholderText(/enter a message/i)
  const currentServer = selectServerQuery.server
  const mockUseServerStore = (useServerStore as unknown) as jest.MockedFunction<
    typeof useServerStore
  >
  const { postMessage } = mockUseServerStore()
  it('should display comments and a text field', () => {
    init()

    expect(getInput()).toBeInTheDocument()
    currentServer.messages.map(({ text }) =>
      expect(screen.getByText(text)).toBeInTheDocument()
    )
  })

  it('should post message when entering a comment', async () => {
    const message = 'message'
    init()

    const input = getInput()
    userEvent.type(input, message + '{enter}')

    expect(postMessage).toBeCalledWith(message)
    await waitFor(() => {
      expect(input).toHaveValue('')
    })
  })

  it('should not post message if nothing is typed', () => {
    init()

    const input = getInput()
    userEvent.type(input, '{enter}')

    expect(postMessage).not.toBeCalled()
  })
})
