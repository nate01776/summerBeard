import React, { Component } from 'react';
import Layout from './Layout.js';
import secData from '../secData';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: []
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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    fetch('https://graph.facebook.com/' + secData["pageId"] + '/events?access_token=' + secData["appId"] + '|' + secData["appSecret"])
      .then(response => response.json())
      .then(json => {
        this.setState({
          showData: json.data,
        })
    });
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {
    return (
      <div className="App">
        <Layout
          showData={this.state.showData}
        />
      </div>
    );
  }
}

export default App;
