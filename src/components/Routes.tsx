import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { useRootStore } from '../RootStoreContext'
import { App } from './App'
import { Login } from './Login'
import { Register } from './Register'

export const Routes: React.FC = () => {
  const rootStore = useRootStore()
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              rootStore.userToken ? <App /> : <Redirect to='/login' />
            }
          />
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
