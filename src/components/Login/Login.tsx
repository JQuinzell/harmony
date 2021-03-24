import {
  Button,
  Card,
  CardActions,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useRootStore } from '~/RootStoreContext'
import { useServerStore } from '~/stores/serverHooks'

const useStyles = makeStyles((theme) => ({
  loginCard: {
    width: '50%',
    // height: '50vh',
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
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const styles = useStyles()
  const { login } = useServerStore()

  async function onSubmit() {
    try {
      await login(username, password)
      history.push('/')
    } catch (err) {
      console.log(err)
      setError('Invalid username or password')
    }
  }

  return (
    <Card className={styles.loginCard}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography variant="h3">Login</Typography>
        </Grid>
        <Grid item>
          <TextField
            id="username-input"
            label="username"
            variant="filled"
            fullWidth
            error={!!error}
            helperText={error}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password-input"
            label="password"
            type="password"
            variant="filled"
            fullWidth
            error={!!error}
            helperText={error}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
      <CardActions />
      <Link to="/register">Register</Link>
    </Card>
  )
}
