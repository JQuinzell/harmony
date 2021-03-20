import { screen, waitFor } from '@testing-library/react'
import React from 'react'
import { serverPreviewsQuery } from 'src/mocks/data'
import { renderWithProviders } from 'src/testUtils'
import { SideBar } from './Sidebar'

describe('Sidebar', () => {
  const init = () => renderWithProviders(<SideBar />)
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
})
