import { screen, waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { serverPreviewsQuery } from '~/mocks/data'
import { renderWithProviders } from '~/testUtils'
import { SearchServer } from './SearchServer'
import { useServerStore } from '~/stores/serverHooks'
import { useServerStore as mockUseServerStore } from '~/stores/__mocks__/serverHooks'

jest.mock('~/stores/serverHooks')

describe('SearchServer', () => {
  const init = () => renderWithProviders(<SearchServer />)
  const searchButton = () => screen.getByRole('button', { name: 'search' })
  const {
    joinServer,
    selectServer,
  } = (useServerStore as typeof mockUseServerStore)()

  it('should render', () => {
    init()

    expect(searchButton()).toBeInTheDocument()
  })

  it('should open search server modal if search button clicked', async () => {
    init()

    userEvent.click(searchButton())

    expect(screen.getByText(/join a server/i)).toBeInTheDocument()
    await waitFor(() =>
      serverPreviewsQuery.servers.map(({ title }) => {
        expect(screen.getByText(title)).toBeInTheDocument()
      })
    )
  })

  it('should call joinServer is a server is clicked', async () => {
    init()
    const { title, id } = serverPreviewsQuery.servers[0]

    userEvent.click(searchButton())
    const joinButton = await screen.findByRole('button', {
      name: 'join-' + title,
    })
    userEvent.click(joinButton)

    expect(joinServer).toBeCalledWith(id)
    expect(selectServer).toBeCalledWith(title)
  })
})
