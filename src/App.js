import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
