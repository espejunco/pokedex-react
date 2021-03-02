import React from 'react';
import Home from "containers/Home";
import Pokemon from 'containers/Pokemon';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Topbar from 'components/Topbar';

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/pokemon/:name" component = {Pokemon}/>
        <Redirect to = "/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
