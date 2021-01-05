import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Feed from "./pages/feed/Feed";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={ Inicio } />
        <Route exact={true} path="/feed" component={ Feed } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
