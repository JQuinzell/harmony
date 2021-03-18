import {
  Card,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  registerCard: {
    width: '50%',
    height: '50vh',
    margin: `${theme.spacing(8)}px auto`,
    '& .MuiGrid-container': {
      height: '100%',
    },
    '& .MuiGrid-item': {
      width: '50%',
    },
  },
}))

export const Register: React.FC = () => {
  const styles = useStyles()

  return (
    <Card className={styles.registerCard}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography variant="h3">Register</Typography>
        </Grid>
        <Grid item>
          <TextField label="username" variant="filled" fullWidth />
        </Grid>
        <Grid item>
          <TextField
            label="password"
            type="password"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="confirmation"
            type="password"
            variant="filled"
            fullWidth
          />
        </Grid>
      </Grid>
    </Card>
  )
}
