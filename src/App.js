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
    var infoContainer = document.getElementsByClassName('info-container');
    var midContainer = document.getElementsByClassName('mid-container');
    var musicContainer = document.getElementsByClassName('music-container');

    if (scroll === 0) {
      midContainer[0].style.opacity = "0"
    }

    if (scroll > window.innerHeight * .2) {
      midContainer[0].style.opacity = "1"
      midContainer[0].style.top = "0"
    }

    if (scroll > window.innerHeight * .4) {
      musicContainer[0].style.opacity = "1"
      musicContainer[0].style.top = "0"
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
