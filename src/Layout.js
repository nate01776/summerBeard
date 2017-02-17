import React, { Component } from 'react';
import Shows from './Shows.js'
import News from './News.js'
import Social from './Social.js'
import Head from './Head.js'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
       bannerNumber: 1,
    }
  }

  render() {
    let bannerNumber = this.state.bannerNumber;
    let recentPost = this.props.recentPost;
    let showData = this.props.showData;

    return (
      <div>
        <Head
          bannerNumber={bannerNumber}
        />
        <div className="mid-container">
          <Shows
            showData={showData}
          />
          <News
            recentPost={recentPost}
          />
        </div>
        <Social />
      </div>
    );
  }
}

export default Layout;
