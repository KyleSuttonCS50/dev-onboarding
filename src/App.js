import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';
import whatsfordinner from './whatsfordinner.png';
import thissite from './thissite.png';
import NewModal from './NewModal.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kyle Sutton</h1> 
          <p className="info"> Harvard College Class of 2021</p>
          <p className="info">A.B. Candidate in Computer Science</p>
          <p className="info">(339) 236 - 0329</p>
          <p className="info">kylesutton@college.harvard.edu</p>
        </header>
        <NewModal
          Modalid="Modal1"
          title="What's For Dinner?"
          tiledesc="A simple webapp for finding recipes based on given ingredients."
          desc=
            "A more in-depth explanation of a simple webapp for finding recipes based on given ingredients."
          img={whatsfordinner}
          langs={["javascript","python","html","css","sqlite"]}
          link="https://github.com/SuttonKyle/recipes"
        />
         <NewModal
          Modalid="Modal2"
          title="Portfolio"
          tiledesc="A portfolio of my web projects."
          desc=
            "A more in-depth explanation of a portfolio of my web projects."
          img={thissite}
          langs={["react","html","css"]}
          link="https://github.com/SuttonKyle/dev-onboarding"
        />
      </div>
    );
  }
}

export default App;
