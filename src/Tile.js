import React, { Component } from 'react';
import './App.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover:false
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  mouseOver() {
    this.setState({hover: true})
  }

  mouseLeave() {
    this.setState({hover: false})
  }

  whereMouse() {
    if (this.state.hover){
      return(
        <div>
          <img src={this.props.img} className="tileimg-faded"/>
          <p className="tiletext"> {this.props.title} </p>
          <p className="tiledesc"> {this.props.desc} </p>
        </div>
      );
    }
    return(<img src={this.props.img} className="tileimg"/>);
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

export default Tile;
