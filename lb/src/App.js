import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <h1>Start</h1>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
