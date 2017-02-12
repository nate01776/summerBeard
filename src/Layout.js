import React, { Component } from 'react';
import Shows from './Shows.js'
import News from './News.js'
import Social from './Social.js'
import Head from './Head.js'

class Layout extends Component {
  render() {
    return (
      <div>
        <Head
          bannerNumber="1"
        />
        <div className="social-container">
          <Social />
        </div>
        <div className="mid-container">
          <div className="shows-container">
            <Shows
              showData="test"
            />
          </div>
          <div className="news-container">
            <News
              newsData="thing"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
