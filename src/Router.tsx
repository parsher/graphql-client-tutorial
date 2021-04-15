import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Detail from "pages/Detail";

function Router() {
  return (
    <HashRouter>
      <Navigation />
      <br />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </HashRouter>
  );
}

export default Router;