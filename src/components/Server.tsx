import { makeStyles, TextField } from '@material-ui/core'
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

const useStyles = makeStyles((theme) => ({
  panel: {
    height: '100%',
    position: 'relative',
    padding: theme.spacing(2),
  },
  input: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: 0,
    right: 0,
    padding: `0 ${theme.spacing(2)}px`,
  },
}))

export const Server: React.FC = () => {
  const styles = useStyles()

  return (
    <main className={styles.panel}>
      {comments.map(({ id, ...comment }) => (
        <Comment key={id} {...comment} />
      ))}
      <TextField
        className={styles.input}
        fullWidth
        variant='filled'
        placeholder='Enter a message'
      />
    </main>
  )
}
