import { Grid, makeStyles } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useServerStore } from '~/stores/serverHooks'
import { AddServer } from '../AddServer'
import { SearchServer } from '../SearchServer'
import { ServerButton } from '../ServerButton'

const useStyles = makeStyles((theme) => ({
  nav: {
    background: theme.palette.background.paper,
    height: '100%',
  },
  bottomIcons: {
    marginTop: 'auto',
  },
}))

export const SideBar: React.FC = observer(() => {
  const styles = useStyles()
  const { selectServer, joinedServers } = useServerStore()
  return (
    <Grid className={styles.nav} container direction="column" component="nav">
      {joinedServers.map((server) => (
        <Grid key={server.title} item>
          <ServerButton
            title={server.title}
            onClick={() => selectServer(server.title)}
          />
        </Grid>
      ))}
      <Grid item className={styles.bottomIcons}>
        <AddServer />
        <SearchServer />
      </Grid>
    </Grid>
  )
})
