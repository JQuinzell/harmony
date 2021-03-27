import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { renderWithProviders } from '~/testUtils'
import { ServerCard } from './ServerCard'

describe('ServerCard', () => {
  const onJoin = jest.fn()
  const title = 'title'
  const image = 'image'
  const description = 'description'
  const init = () =>
    renderWithProviders(
      <ServerCard
        title={title}
        image={image}
        description={description}
        onJoin={onJoin}
      />
    )
  const joinButton = () => screen.getByRole('button', { name: 'join-' + title })

  it('should render', () => {
    init()

    expect(screen.getByRole('img')).toHaveAttribute('src', image)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(joinButton())
  })

  it('should call onJoin when clicking join', () => {
    init()

    userEvent.click(joinButton())

    expect(onJoin).toBeCalled()
  })
})
