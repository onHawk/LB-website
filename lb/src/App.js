import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

import './sass/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
