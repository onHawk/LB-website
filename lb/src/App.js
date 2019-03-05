import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Gallery from './components/Gallery';

import './sass/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <div className="App">
            <h1>Start</h1>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
