import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Icon,
  TextField,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useServerStore } from '~/stores/serverHooks'
import { ServerButton } from '../ServerButton'

export const AddServer: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const { createServer } = useServerStore()

  function closeDialog() {
    setOpen(false)
  }

  function openDialog() {
    setOpen(true)
  }

  async function save() {
    if (title) {
      await createServer({
        title,
        description: 'A brief description',
        image: 'https://picsum.photos/seed/server/320/180',
      })
      setTitle('')
      closeDialog()
    }
  }

  return (
    <>
      <ServerButton title="add" onClick={openDialog}>
        <Icon>add</Icon>
      </ServerButton>
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="create-server-title"
      >
        <DialogTitle id="create-server-title">Create Server</DialogTitle>
        <DialogContent>
          <TextField
            id="name-input"
            value={title}
            label="name"
            variant="filled"
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={save} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
