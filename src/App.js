import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kyle Sutton</h1> 
          <p className="info"> Harvard College Class of 2021</p>
          <p className="info">B.A. Candidate in Computer Science</p>
          <p className="info">(339) 236 - 0329</p>
          <p className="info">kylesutton@college.harvard.edu</p>
        </header>

      </div>
    );
  }
}

export default App;
