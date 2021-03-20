import {
  Dialog,
  DialogContent,
  DialogTitle,
  Icon,
  makeStyles,
} from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Server } from '~/stores/RootStore'
import { useRootStore } from '../RootStoreContext'
import { ServerButton } from './ServerButton'
import { ServerCard } from './ServerCard'

const useStyles = makeStyles({
  cards: {
    display: 'flex',
  },
})

export const SearchServer: React.FC = observer(() => {
  const styles = useStyles()
  const [open, setOpen] = useState(false)
  const rootStore = useRootStore()

  function closeDialog() {
    setOpen(false)
  }

  function openDialog() {
    setOpen(true)
  }

  function joinServer(id: Server['id']) {
    rootStore.joinServer(id)
    closeDialog()
  }

  return (
    <>
      <ServerButton title="search" onClick={openDialog}>
        <Icon>search</Icon>
      </ServerButton>
      <Dialog fullWidth maxWidth="xl" open={open} onClose={closeDialog}>
        <DialogTitle>Join a Server</DialogTitle>
        <DialogContent className={styles.cards}>
          {rootStore.servers.map(({ id, title, image, description }) => (
            <ServerCard
              key={title}
              title={title}
              image={image}
              description={description}
              onJoin={() => joinServer(id)}
            />
          ))}
        </DialogContent>
      </Dialog>
    </>
  )
})
