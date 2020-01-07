import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Cart from './pages/Cart/index';


function routes() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
  );
}

export default routes;
