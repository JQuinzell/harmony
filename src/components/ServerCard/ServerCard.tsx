import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'

interface IProps {
  title: string
  image: string
  description: string
  onJoin: () => void
}

const useStyles = makeStyles({
  card: {
    width: 320,
    margin: '0 16px',
    '& .MuiCardContent-root': {
      height: 120,
      overflow: 'hidden',
    },
    '& .MuiCardActions-root button': {
      marginLeft: 'auto',
    },
  },
})

export const ServerCard: React.FC<IProps> = ({
  title,
  image,
  description,
  onJoin,
}) => {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia component="img" image={image} height={180} width={320} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={onJoin} aria-label={`join-${title}`}>
          Join
        </Button>
      </CardActions>
    </Card>
  )
}
