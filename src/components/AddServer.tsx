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
import { ServerButton } from './ServerButton'

export const AddServer: React.FC = () => {
  const [open, setOpen] = useState(false)

  function closeDialog() {
    setOpen(false)
  }

  function openDialog() {
    setOpen(true)
  }

  return (
    <>
      <ServerButton onClick={openDialog}>
        <Icon>add</Icon>
      </ServerButton>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Create Server</DialogTitle>
        <DialogContent>
          <TextField label='name' variant='filled' />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color='primary'>
            Cancel
          </Button>
          <Button onClick={closeDialog} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
