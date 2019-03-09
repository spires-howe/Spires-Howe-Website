import React, { Component } from 'react';


import './App.css';
import { NavBarComponent } from './components/nav-bar/nav-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponent />
        <header className="App-header">
          <p>
            Welcome to SnH!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
