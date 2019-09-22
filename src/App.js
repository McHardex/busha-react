import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </div>
  );
};

export default App;
