import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { App } from './App'
import { Login } from './Login'
import { Register } from './Register'

export const Routes: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
