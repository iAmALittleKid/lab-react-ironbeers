import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Beers from "./Beers"
import RandomBeer from "./RandomBeer"
import NewBeer from "./NewBeer"


function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route render={props => <h2>404</h2>} />
      </Switch>
    </div>
  );
}

export default App;
