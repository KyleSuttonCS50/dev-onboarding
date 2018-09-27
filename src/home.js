import React, { Component } from 'react'
import logo from './logo.jpeg'
import './App.css'
import whatsfordinner from './whatsfordinner.png'
import thissite from './thissite.png'
import NewModal from './NewModal.js'

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Portfolio </h1>
        <NewModal
          Modalid="Modal1"
          title="What's For Dinner?"
          tiledesc="A simple webapp for finding recipes based on given ingredients."
          desc="What's For Dinner (or WhatsForDinner) is a simple webapp I built for my CS50 
            final project.  It uses a database of about 1000 recipes scraped from BBC food
            to return a list of recipes that can be made based on the ingredients the user
            inputs.  The recipes are listed in order of how many of the required ingredients
            the user has, and are available on the website itself."
          img={whatsfordinner}
          langs={['javascript', 'python', 'html', 'css', 'sqlite']}
          link="https://github.com/SuttonKyle/recipes"
        />
        <NewModal
          Modalid="Modal2"
          title="Portfolio"
          tiledesc="A portfolio of my web projects."
          desc="My portfolio (the site you're using right now) is my first project with React.  It's a
            static website that shows various information about me and my projects."
          img={thissite}
          langs={['react', 'html', 'css']}
          link="https://github.com/SuttonKyle/dev-onboarding"
        />
      </div>
    )
  }
}

export default Home
