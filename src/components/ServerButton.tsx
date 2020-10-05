import { Avatar, AvatarProps, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  server: {
    width: '70px',
    height: '70px',
    margin: `${theme.spacing(2)}px`,
    background: theme.palette.primary.light,
    cursor: 'pointer',
    '& .material-icons': {
      fontSize: 32,
    },
  },
}))

export const ServerButton: React.FC<AvatarProps> = ({ children, ...props }) => {
  const styles = useStyles()
  return (
    <Avatar className={styles.server} {...props}>
      {children}
    </Avatar>
  )
}
