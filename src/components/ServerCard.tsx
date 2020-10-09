import {
  Card,
  CardActionArea,
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
  onClick: () => void
}

const useStyles = makeStyles({
  card: {
    width: 320,
    margin: '0 16px',
  },
})

export const ServerCard: React.FC<IProps> = ({
  title,
  image,
  description,
  onClick,
}) => {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <CardActionArea onClick={onClick}>
        <CardMedia component='img' image={image} height={180} width={320} />
        <CardContent>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='body1'>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
