import React, { Component } from 'react';
import Layout from './Layout.js';
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
    console.log(process.env.REACT_APP_NODE_ENV)
    console.log(process.env.REACT_APP_APID)
    let pageID = process.env.REACT_APP_SMRBRD;
    let appID = process.env.REACT_APP_APPID;
    let appSecret = process.env.REACT_APP_APPSECRET
    fetch('https://graph.facebook.com/' + pageID + '/events?access_token=' + appID + '|' + appSecret)
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
