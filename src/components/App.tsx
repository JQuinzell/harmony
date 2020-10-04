import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Server } from './Server'
import { SideBar } from './Sidebar'

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  serverPanel: {
    flexGrow: 1,
  },
})

export const App: React.FC = () => {
  const styles = useStyles()
  return (
    <Grid className={styles.root} container>
      <Grid item>
        <SideBar />
      </Grid>
      <Grid className={styles.serverPanel} item>
        <Server />
      </Grid>
    </Grid>
  )
}
