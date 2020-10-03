import {
  Card,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  loginCard: {
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

export const Login: React.FC = () => {
  const styles = useStyles()

  return (
    <Card className={styles.loginCard}>
      <Grid
        container
        spacing={2}
        direction='column'
        alignItems='center'
        justify='center'
      >
        <Grid item>
          <Typography variant='h3'>Login</Typography>
        </Grid>
        <Grid item>
          <TextField label='username' variant='filled' fullWidth />
        </Grid>
        <Grid item>
          <TextField
            label='password'
            type='password'
            variant='filled'
            fullWidth
          />
        </Grid>
      </Grid>
      <Link to='/register'>Register</Link>
    </Card>
  )
}
