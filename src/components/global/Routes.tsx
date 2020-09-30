import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/login', '/']}>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
