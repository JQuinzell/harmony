import {
  Dialog,
  DialogContent,
  DialogTitle,
  Icon,
  makeStyles,
} from '@material-ui/core'
import React, { useState } from 'react'
import { ServerButton } from './ServerButton'
import { ServerCard } from './ServerCard'

const servers = [
  {
    title: 'Minecraft',
    image:
      'https://cdn.discordapp.com/discovery-splashes/302094807046684672/579507dff86d89cd5decd8e016a54706.jpg?size=320',
    description: 'You can put blocks anywhere and everywhere. Go nuts.',
  },
  {
    title: 'Among Us',
    image:
      'https://cdn.discordapp.com/discovery-splashes/688767594744119298/b18c65cc5739fb34408a0ecd6f169d5f.jpg?size=320',
    description:
      "You know you've always wanted to lie to your friends. And maybe stab them too.",
  },
  {
    title: 'Leage of Legends',
    image:
      'https://cdn.discordapp.com/discovery-splashes/125440014904590336/b404a9072e0446094002df1280833beb.jpg?size=320',
    description: 'Pick a champion. Pick a lane. Hope that no one feeds.',
  },
]

const useStyles = makeStyles({
  cards: {
    display: 'flex',
  },
})

export const SearchServer: React.FC = () => {
  const styles = useStyles()
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
        <Icon>search</Icon>
      </ServerButton>
      <Dialog fullWidth maxWidth='xl' open={open} onClose={closeDialog}>
        <DialogTitle>Join a Server</DialogTitle>
        <DialogContent className={styles.cards}>
          {servers.map(({ title, image, description }) => (
            <ServerCard
              key={title}
              title={title}
              image={image}
              description={description}
              onClick={closeDialog}
            />
          ))}
        </DialogContent>
      </Dialog>
    </>
  )
}
