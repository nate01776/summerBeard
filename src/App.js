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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    let pageID = process.env.REACT_APP_SMRBRD;
    let appToken = 'EAAI6HPZCwFeUBALo6Y0nIyOmDejYPG0vM431q6SP0SchfZC0bUe8lCUZCmA1as5P04Ci93OUsbUdOOhgXECR3FMXFTP70509kbfgquw6aGvR58niWD30PYL7yEMUSdAN5u7YjeCrV9AN6KhCZBz0ZBuG1M0Wg8zwZD';
    /* RECENT POST CALL */
    fetch('https://graph.facebook.com/' + pageID + '?fields=id,name,events{name,description,place{name,location{city,state}},start_time},posts{message,picture,created_time}&access_token=' + appToken)
      .then(response => {
        if (response.ok) {
          return response.json()
        } throw new Error('Network response was not OK!')})
      .then(json => {
        this.setState({
          bandName: json["name"],
          postsData: json["posts"]["data"],
          showsData: json["events"]["data"],
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
