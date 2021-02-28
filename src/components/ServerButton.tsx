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

interface Props extends AvatarProps {
  title?: string
}

export const ServerButton: React.FC<Props> = ({ title, ...props }) => {
  const styles = useStyles()
  return (
    <div data-testid={title}>
      <Avatar className={styles.server} {...props}>
        {title?.slice(0, 2) ?? ''}
      </Avatar>
    </div>
  )
}
