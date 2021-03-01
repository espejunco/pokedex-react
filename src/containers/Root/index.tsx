import React from 'react';
import Home from "containers/Home";
import Pokemon from 'containers/Pokemon';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {Home}/>
          <Route exact path = "/Pokemon/:name" component = {Pokemon}/>
        <Redirect to = "/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
