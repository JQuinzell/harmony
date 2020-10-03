import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { SideBar } from './Sidebar'

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
})

export const App: React.FC = () => {
  const styles = useStyles()
  return (
    <Grid className={styles.root} container>
      <Grid item>
        <SideBar />
      </Grid>
    </Grid>
  )
}
