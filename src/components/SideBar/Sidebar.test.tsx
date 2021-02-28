import { screen } from '@testing-library/react'
import React from 'react'
import { serverPreviewsQuery } from 'src/mocks/data'
import { renderWithProviders } from 'src/testUtils'
import { SideBar } from './Sidebar'

describe('Sidebar', () => {
  it('should list servers', async () => {
    const titles = serverPreviewsQuery.user.servers.map(({ title }) => title)

    renderWithProviders(<SideBar />)

    const serverButtons = await Promise.all(
      titles.map((title) => screen.findByTestId(title))
    )

    serverButtons.forEach((button) => {
      expect(button).toBeDefined()
    })
  })
})
