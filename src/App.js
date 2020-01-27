import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  
  <div>
    <Navigation />

    <Switch>

      <Route exact path="/" >
        <Home />
      </Route>

      <Route path="/about" >
        <About />
      </Route>

      <Route path="/contact" >
        <Contact />
      </Route>

    </Switch>
  </div>
  
);

export default App;
