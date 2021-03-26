import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { serverPreviewsQuery } from '~/mocks/data'
import { renderWithProviders } from '~/testUtils'
import { SideBar } from './Sidebar'
import { useServerStore } from '~/stores/serverHooks'
import { useServerStore as mockUseServerStore } from '~/stores/__mocks__/serverHooks'

jest.mock('~/stores/serverHooks')

describe('Sidebar', () => {
  const init = () => renderWithProviders(<SideBar />)
  const { selectServer } = (useServerStore as typeof mockUseServerStore)()
  const titles = serverPreviewsQuery.user.servers.map(({ title }) => title)

  it('should list server and action buttons', async () => {
    init()

    screen.getByRole('button', { name: /add/i })
    screen.getByRole('button', { name: /search/i })
    await waitFor(() =>
      titles.map((title) =>
        expect(screen.getByRole('button', { name: title })).toBeInTheDocument()
      )
    )
  })

  it('select server that is clicked', async () => {
    const title = titles[0]
    init()

    const button = await screen.findByRole('button', { name: title })
    userEvent.click(button)

    expect(selectServer).toBeCalledWith(title)
  })
})
