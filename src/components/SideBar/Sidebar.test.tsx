import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { serverPreviewsQuery } from 'src/mocks/data'
import { renderWithProviders } from 'src/testUtils'
import { SideBar } from './Sidebar'
import { useServerStore } from 'src/stores/serverHooks'

jest.mock('src/stores/serverHooks')

describe('Sidebar', () => {
  const init = () => renderWithProviders(<SideBar />)
  const mockUseServerStore = (useServerStore as unknown) as jest.MockedFunction<
    typeof useServerStore
  >
  const { selectServer } = mockUseServerStore()
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
