import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Inicio from './pages/index'
import Feed from './pages/feed/Feed'
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
import Artist from './pages/artist/Artist'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Inicio} />
        <Route exact={true} path="/feed" component={Feed} />
        <Route path="/user/:username" component={Profile} />
        <Route exact={true} path="/home" component={Home} />
        <Route path="/artist/:id" component={Artist} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
