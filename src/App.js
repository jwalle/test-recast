import React, { Component } from 'react';
import logo from './ressources/recast.svg';
import './App.css';
import UsersList from './components/UsersList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <UsersList />
      </div>
    );
  }
}

export default App;
