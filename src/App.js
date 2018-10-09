import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,
    Route,
    Redirect} from 'react-router-dom';
import './App.css';
import Index from './components/indexpage'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Route path="/" exact component={Index}/>
          </div>
        </Router>
    );
  }
}

export default App;
