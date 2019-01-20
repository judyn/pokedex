import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutPage from './pages/about';
import Home from './pages/home';
import './App.css';

class App extends Component {
  render() {
  
    return (
      <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
            <Link to="/pokedex">Home</Link>
          </li>
        </ul>

        <Route exact path="/about/" component={AboutPage}/>
        <Route exact path="/pokedex/" component={Home}/>
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
