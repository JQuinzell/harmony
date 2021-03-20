import React from 'react'
import { Comment } from './Comment'
import { renderWithProviders } from '~/testUtils'
import { screen } from '@testing-library/dom'

describe('Comment', () => {
  it('should display comment details', () => {
    const name = 'Name'
    const text = 'Comment Text'
    const date = new Date(2020, 1, 1).getTime()
    renderWithProviders(<Comment name={name} text={text} date={date} />)

    expect(screen.getByText('Na')).toBeInTheDocument()
    expect(screen.getByText(`${name}: 2/1/2020`))
  })
})
