import React from 'react'
import { Comment } from './Comment'

const comments = [
  { id: 1, name: 'John', text: 'Hello world', date: new Date(2020, 9, 1) },
  {
    id: 2,
    name: 'Alex',
    text: 'Responding to Hello world',
    date: new Date(2020, 9, 1),
  },
  { id: 3, name: 'Luke', text: 'Hello world', date: new Date() },
]
export const Server: React.FC = () => {
  return (
    <main>
      {comments.map(({ id, ...comment }) => (
        <Comment key={id} {...comment} />
      ))}
    </main>
  )
}
