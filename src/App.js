import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';
import whatsfordinner from './whatsfordinner.png';
import thissite from './thissite.png';
import NewModal from './NewModal.js';
import Home from './home.js';
import Basic from './basic.js';
import Education from './education.js';
import ProfExp from './profexp.js';
import Contact from './contact.js';
import FontAwesome from './fontawesome-all.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      basic: false,
      contact: false,
      education: false,
      profexp: false,
    };
    this.basicInfo = this.basicInfo.bind(this);
    this.home = this.home.bind(this);
    this.setEducation = this.setEducation.bind(this);
    this.profExp = this.profExp.bind(this);
    this.contact = this.contact.bind(this);
    this.children = this.children.bind(this);
  }

  basicInfo() {
    this.setState({basic: true, education: false, contact: false, profexp: false});
  }

  home() {
    this.setState({basic: false, education: false, contact: false, profexp: false});
  }

  setEducation() {
    this.setState({basic: false, education: true, contact: false, profexp: false});
  }

  profExp() {
    this.setState({basic: false, education: false, contact: false, profexp: true});
  }

  contact() {
    this.setState({basic: false, education: false, contact: true, profexp: false});
  }

  children() {
    if (this.state.contact) {
      return(<Contact />);
    }
    if (this.state.basic) {
      return(<Basic />);
    }
    if (this.state.education) {
      return(<Education />);
    }
    if (this.state.profexp) {
      return(<ProfExp />);
    }
    return(<Home />);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Content">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Kyle Sutton</h1> 
          <p className="info"> Harvard College Class of 2021</p>
          <p className="info">A.B. Candidate in Computer Science</p>
          <p className="icons"> 
            <a className="icon" href="https://www.linkedin.com/in/kyle-sutton-0a7008158/" target="_"> <i class="fab fa-linkedin"></i> </a>
            <a className="icon" href="https://github.com/SuttonKyle" target="_"> <i class="fab fa-github"></i> </a>
            <a className="icon" href="https://facebook.com/kyle.sutton.35762" target="_"> <i class="fab fa-facebook"></i> </a>
            <a className="icon" href="https://open.spotify.com/user/22dz2m3zzpiip4qx2juh52fra?si=tgtvwwT4QEOfxueVZU-hVA" target="_"> 
              <i class="fab fa-spotify"></i> 
            </a>
          </p>
          </div>
        </header>
        <div className="NavBar">
          <button className="Nav" onClick={this.home}> Projects </button>
          <button className="Nav" onClick={this.basicInfo}> About Me </button>
          <button className="Nav" onClick={this.setEducation}> Education </button>
          <button className="Nav" onClick={this.profExp}> Experience </button>
          <button className="Nav" onClick={this.contact}> Contact </button>
        </div>
        {this.children()}
      </div>);
  }
}

export default App;
