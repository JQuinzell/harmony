import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { AddServer } from './AddServer'
import { SearchServer } from './SearchServer'
import { ServerButton } from './ServerButton'

const servers = [{ name: 'Cool Server' }, { name: 'S2' }, { name: 'S3' }]

const useStyles = makeStyles((theme) => ({
  nav: {
    background: theme.palette.background.paper,
    height: '100%',
  },
  bottomIcons: {
    marginTop: 'auto',
  },
}))

export const SideBar: React.FC = () => {
  const styles = useStyles()

  return (
    <Grid className={styles.nav} container direction='column' component='nav'>
      {servers.map(({ name }) => (
        <Grid key={name} item>
          <ServerButton>{name.slice(0, 2)}</ServerButton>
        </Grid>
      ))}
      <Grid item className={styles.bottomIcons}>
        <AddServer />
        <SearchServer />
      </Grid>
    </Grid>
  )
}
