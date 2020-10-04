import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  comment: {
    marginBottom: `${theme.spacing(2)}px`,
    '& .MuiAvatar-root': {
      margin: `0 ${theme.spacing(1)}px`,
    },
  },
}))
interface Props {
  name: string
  text: string
  date: Date
}

export const Comment: React.FC<Props> = ({ name, text, date }) => {
  const styles = useStyles()

  return (
    <Grid className={styles.comment} container>
      <Grid item>
        <Avatar>{name.slice(0, 2)}</Avatar>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>
          {name} {date.toLocaleDateString()}
        </Typography>
        <Typography variant='body1'>{text}</Typography>
      </Grid>
    </Grid>
  )
}
