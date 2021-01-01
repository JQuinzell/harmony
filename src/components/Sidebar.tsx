import { Grid, makeStyles } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useRootStore } from '../RootStoreContext'
import { AddServer } from './AddServer'
import { SearchServer } from './SearchServer'
import { ServerButton } from './ServerButton'

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
  const rootStore = useRootStore()

  return (
    <Grid className={styles.nav} container direction='column' component='nav'>
      {rootStore.joinedServers.map(({ title }) => (
        <Grid key={title} item>
          <ServerButton onClick={() => rootStore.selectServer(title)}>
            {title.slice(0, 2)}
          </ServerButton>
        </Grid>
      ))}
      <Grid item className={styles.bottomIcons}>
        <AddServer />
        <SearchServer />
      </Grid>
    </Grid>
  )
})
