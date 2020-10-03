import { makeStyles } from '@material-ui/core'
import React from 'react'

const servers = [{ name: 'Cool Server' }, { name: 'S2' }, { name: 'S3' }]

const useStyles = makeStyles((theme) => ({
  nav: {
    background: theme.palette.background.paper,
    height: '100%',
    display: 'inline-block',
  },
  server: {
    width: '70px',
    height: '70px',
    margin: `${theme.spacing(2)}px`,
    borderRadius: '100%',
    background: theme.palette.primary.light,
    textAlign: 'center',
    lineHeight: '70px',
    fontSize: 24,
  },
}))

export const SideBar: React.FC = () => {
  const styles = useStyles()

  return (
    <nav className={styles.nav}>
      {servers.map(({ name }) => (
        <div key={name} className={styles.server}>
          {name.slice(0, 2)}
        </div>
      ))}
    </nav>
  )
}
