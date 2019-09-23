import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Balance from './views/Balance';
import Transfer from './views/Transfer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/balance" component={Balance} />
      <Route exact path="/transfer" component={Transfer} />
    </div>
  );
};

export default App;
