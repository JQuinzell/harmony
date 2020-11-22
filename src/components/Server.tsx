import { makeStyles, TextField } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useRootStore } from '../RootStoreContext'
import { Comment } from './Comment'

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

export const Server: React.FC = observer(() => {
  const styles = useStyles()
  const rootStore = useRootStore()
  const messages = rootStore.currentServer?.messages

  return (
    <main className={styles.panel}>
      {messages?.map(({ id, user, ...message }) => (
        <Comment key={id} {...message} name={user.name} />
      ))}
      <TextField
        className={styles.input}
        fullWidth
        variant='filled'
        placeholder='Enter a message'
      />
    </main>
  )
})
