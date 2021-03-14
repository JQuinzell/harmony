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
import { useRootStore } from '../RootStoreContext'
import { ServerButton } from './ServerButton'

export const AddServer: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const rootStore = useRootStore()

  function closeDialog() {
    setOpen(false)
  }

  function openDialog() {
    setOpen(true)
  }

  async function save() {
    if (title) {
      await rootStore.createServer({
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
      <ServerButton title='add' onClick={openDialog}>
        <Icon>add</Icon>
      </ServerButton>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Create Server</DialogTitle>
        <DialogContent>
          <TextField
            value={title}
            label='name'
            variant='filled'
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color='primary'>
            Cancel
          </Button>
          <Button onClick={save} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
