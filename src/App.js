import React, { Component } from 'react';
import Layout from './Layout.js';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandName: "",
      showsData: [],
      postsData: [],
    }
  }

  handleScroll(event) {
    var scroll = window.scrollY;
    var bandInfo = document.getElementsByClassName('band-info')[0];
    var midContainer = document.getElementsByClassName('mid-container')[0];

    if (document.documentElement.clientWidth > 601) {
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
  }};

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);

    const filePath = require('../public/page_data.md')

    fetch(filePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        let splitArray = text.split("# ")
        let pageJSON = {}

        for (let i = 0; i < splitArray.length; i++) {
          if (splitArray[i] != "") {
            let currentPosition = splitArray[i]
            let toStore = currentPosition.split("- ")
            let toStoreKey = toStore[0].split("\n")
            let toStoreValue = toStore[1].split("\n")

            pageJSON[toStoreKey[0]] = toStoreValue[0]
          }
        }
        this.setState({
          bandName: pageJSON["Band Name"]
        })
    })
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {
    return (
      <div className="App">
        <Layout
          showsData={this.state.showsData}
          postsData={this.state.postsData}
          bandName={this.state.bandName}
        />
      </div>
    );
  }
}

export default App;
