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
    let appToken = process.env.REACT_APP_TOKEN;
    /* RECENT POST CALL */
    fetch('https://graph.facebook.com/' + pageID + '?fields=id%2Cname%2Cevents%7Bname%2Cdescription%2Cplace%7Bname%2Clocation%7Bcity%2Cstate%7D%7D%2Cstart_time%7D%2Cposts%7Bmessage%2Cpicture%2Ccreated_time%7D&access_token=' + appToken)
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
