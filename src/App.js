import React, { Component } from 'react';
import Layout from './Layout.js';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: [],
      recentPost: [],
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
    let pageID = process.env.REACT_APP_PILE;
    let appID = process.env.REACT_APP_APPID;
    let appSecret = process.env.REACT_APP_APPSECRET;

    /* SHOW DATA CALL */
    fetch('https://graph.facebook.com/' + pageID + '/events?access_token=' + appID + '|' + appSecret)
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        this.setState({
          showData: json["data"],
        })
    });
    /* RECENT POST CALL */
    fetch('https://graph.facebook.com/' + pageID + '/posts?access_token=' + appID + '|' + appSecret)
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        this.setState({
          recentPost: json["data"],
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
          showData={this.state.showData}
          recentPost={this.state.recentPost}
        />
      </div>
    );
  }
}

export default App;
