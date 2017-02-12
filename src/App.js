import React, { Component } from 'react';
import Layout from './Layout.js'
import './css/App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    var scroll = window.scrollY;
    var bandInfo = document.getElementsByClassName('band-info')[0];
    var midContainer = document.getElementsByClassName('mid-container')[0];

    if (document.documentElement.clientWidth > 601) {
      if (scroll === 0) {
      }

      if (scroll < window.innerHeight * .2) {
        bandInfo.style.opacity = "1";
        midContainer.style.opacity = "0";
      }

      if (scroll > window.innerHeight * .4) {
        midContainer.style.opacity = "1"
        midContainer.style.top = "0"
        bandInfo.style.opacity = "0"
      }

    } else {
      bandInfo.style.opacity = "1"
      midContainer.style.opacity = "1"
    }
  };

  render() {
    return (
      <div className="App">
        <Layout
          onScroll={this.handleScroll}
        />
      </div>
    );
  }
}

export default App;
