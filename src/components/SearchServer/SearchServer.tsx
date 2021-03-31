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
import { ServerButton } from '~/components/ServerButton'
import { ServerCard } from '~/components/ServerCard'
import { useServerStore } from '~/stores/serverHooks'

const useStyles = makeStyles({
  cards: {
    display: 'flex',
  },
})

export const SearchServer: React.FC = observer(() => {
  const styles = useStyles()
  const [open, setOpen] = useState(false)
  const { servers, joinServer } = useServerStore()

  function closeDialog() {
    setOpen(false)
  }

  function openDialog() {
    setOpen(true)
  }

  function onJoin(id: Server['id']) {
    joinServer(id)
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
          {servers.map(({ id, title, image, description }) => (
            <ServerCard
              key={title}
              title={title}
              image={image}
              description={description}
              onJoin={() => onJoin(id)}
            />
          ))}
        </DialogContent>
      </Dialog>
    </>
  )
})
