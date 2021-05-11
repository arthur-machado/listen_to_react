import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Feed from "./pages/feed/Feed";
import Perfil from "./pages/perfil/Perfil";
import Home from "./pages/home/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Inicio} />
        <Route exact={true} path="/feed" component={Feed} />
        <Route path="/user/:username" component={Perfil} />
        <Route exact={true} path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
