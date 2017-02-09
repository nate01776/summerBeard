import React from 'react';
import Page from './Page.js'
import './App.css';

var App = React.createClass({

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
    var scroll = window.scrollY;
    var bandInfo = document.getElementsByClassName('band-info')
    var midContainer = document.getElementsByClassName('mid-container');

    if (scroll === 0) {
    }

    if (scroll < window.innerHeight * .2) {
      bandInfo[0].style.opacity = "1"
      midContainer[0].style.opacity = "0"
    }

    if (scroll > window.innerHeight * .4) {
      midContainer[0].style.opacity = "1"
      midContainer[0].style.top = "0"
      bandInfo[0].style.opacity = "0"
    }
  },

  render() {
    return (
      <div className="App">
        <Page
          onScroll={this.handleScroll}
        />
      </div>
    );
  }
})

export default App;
