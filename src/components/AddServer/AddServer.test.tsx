import { renderWithProviders } from '~/testUtils'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddServer } from './AddServer'
import React from 'react'
import { useServerStore } from '~/stores/serverHooks'
import { useServerStore as mockUseServerStore } from '~/stores/__mocks__/serverHooks'

jest.mock('~/stores/serverHooks')

describe('AddServer', () => {
  const init = () => renderWithProviders(<AddServer />)
  const getAddButton = () => screen.getByRole('button', { name: 'add' })
  const { createServer } = (useServerStore as typeof mockUseServerStore)()

  it('renders add button', () => {
    init()

    expect(getAddButton()).toBeInTheDocument()
  })

  describe('dialog', () => {
    const openDialog = () => userEvent.click(getAddButton())

    it('opens dialos when clicking add button', () => {
      init()

      expect(screen.queryByRole('dialog')).toBeNull()

      openDialog()

      expect(
        screen.getByRole('dialog', { name: /create server/i })
      ).toBeDefined()
      expect(screen.getByRole('button', { name: /save/i })).toBeDefined()
    })

    it('can close dialog', async () => {
      init()

      openDialog()
      userEvent.click(screen.getByRole('button', { name: /cancel/i }))

      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
    })

    it('can save a server', async () => {
      const name = 'server name'
      init()

      openDialog()
      userEvent.type(screen.getByLabelText('name'), name)
      userEvent.click(screen.getByRole('button', { name: /save/i }))

      expect(createServer).toBeCalled()
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
    })
  })
})
