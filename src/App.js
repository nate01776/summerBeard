import React, { Component } from 'react';
import Layout from './Layout.js'
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       showData: "updated",
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
      let appId = "626846180840933";
      fetch('https://graph.facebook.com/162940294191694/events?access_token=' + appId + '|' + appSecret)
        .then((response) => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('Server response wasn\'t OK');
          }})
        .then((json) => {
          this.setState({showData: json.data})
          debugger;
        });
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
          showData={this.state.showData}
        />
      </div>
    );
  }
}

export default App;
