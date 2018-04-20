import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';
import Modal from 'react-modal';
import whatsfordinner from './whatsfordinner.png';
import thissite from './thissite.png';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      img: this.props.img,
      desc: this.props.desc,
      hover:false
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseOver () {
    this.setState({hover: true})
  }

  mouseLeave() {
    this.setState({hover: false})
  }

  whereMouse() {
    if (this.state.hover){
      return(
        <div>
          <img src={this.state.img} className="tileimg-faded"/>
          <p className="tiletext"> {this.state.title} </p>
          <p className="tiledesc"> {this.state.desc} </p>
        </div>
      );
    }
    return(<img src={this.state.img} className="tileimg"/>);

  }

  render() {
    return (
      <button 
        className="tile" 
        onClick={this.props.onClick} 
        onMouseOver={this.mouseOver} 
        onMouseLeave={this.mouseLeave} 
      >
        {this.whereMouse()}
      </button>);
  }
}

class NewModal extends Component {
  constructor(props){
    super(props);
    this.state= {
      title: this.props.title,
      img: this.props.img,
      desc: this.props.desc,
      langs: this.props.langs,
      link: this.props.link,
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    ///references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return(
      <div>
        <Tile
            title={this.state.title}
            img={this.state.img}
            onClick={this.openModal}
            desc={this.props.tiledesc}
        />
        <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={()=>this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.props.modalid}
          close={this.closeModal}
        >
          <h1> {this.state.title} </h1>
          <div className="column">
            <img src={this.state.img} className="modal-image"/>
            <p> {this.state.desc} </p>
          </div>
          <div className="column"> 
            <h2>Languages Used:</h2>
            {this.state.langs.map(function(listValue){
              return <p className="lang">{listValue}</p>;
            })}           
          </div>
          <div className="desc"> 
            <a className="button" href={this.state.link} target="_"> GitHub Repository </a>
            <button className="button" onClick={this.closeModal}>Close</button>
          </div>
        </Modal>
      </div>
      )
    }
}

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
          link="https://github.com/KyleSuttonCS50/recipes"
        />
         <NewModal
          Modalid="Modal2"
          title="Portfolio"
          tiledesc="A portfolio of my web projects."
          desc=
            "A more in-depth explanation of a portfolio of my web projects."
          img={thissite}
          langs={["react","html","css"]}
          link="https://github.com/KyleSuttonCS50/dev-onboarding"
        />
      </div>
    );
  }
}

export default App;
