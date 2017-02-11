import React from 'react';
import Layout from './Layout.js'
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

    if (document.documentElement.clientWidth > 601) {
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
    } else {
      bandInfo[0].style.opacity = "1"
      midContainer[0].style.opacity = "1"
    }
  },

  render() {
    return (
      <div className="App">
        <Layout
          onScroll={this.handleScroll}
        />
      </div>
    );
  }
})

export default App;
