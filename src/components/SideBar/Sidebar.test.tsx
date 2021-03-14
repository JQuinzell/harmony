import { screen } from '@testing-library/react'
import React from 'react'
import { serverPreviewsQuery } from 'src/mocks/data'
import { renderWithProviders } from 'src/testUtils'
import { SideBar } from './Sidebar'

describe('Sidebar', () => {
  const init = () => renderWithProviders(<SideBar />)

  it('should list server and action buttons', async () => {
    const titles = serverPreviewsQuery.user.servers.map(({ title }) => title)
    init()

    screen.getByRole('button', { name: /add/i })
    screen.getByRole('button', { name: /search/i })
    await Promise.all(
      titles.map((title) => screen.findByRole('button', { name: title }))
    )
  })
})
