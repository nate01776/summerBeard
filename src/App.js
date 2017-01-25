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
      infoContainer[0].style.marginLeft = "0px"
      infoContainer[0].style.marginRight = "0px"
      midContainer[0].style.opacity = "0"
    }

    if (scroll < (window.innerHeight/2)) {
      midContainer[0].style.opacity = "0"
    }

    if (scroll < (window.innerHeight * .8)) {
      musicContainer[0].style.opacity = "0"
    }

    if (scroll > 0) {
      infoContainer[0].style.marginLeft = "20px";
      infoContainer[0].style.marginRight = "20px";
    }

    if (scroll > window.innerHeight * .15) {
      midContainer[0].style.opacity = "1"
    }

    if (scroll > window.innerHeight * .75) {
      musicContainer[0].style.opacity = "1"
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
