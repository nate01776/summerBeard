import React, { Component } from 'react';
import Shows from './Shows.js'
import News from './News.js'
import Social from './Social.js'
import Head from './Head.js'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
       bannerCount: 1,
    }
  }
  // test commit
  render() {
    let bannerNum = this.state.bannerCount;
    let postsData = this.props.postsData;
    let showsData = this.props.showsData;
    let bandName = this.props.bandName

    return (
      <div>
        <Head
          bannerNumber={bannerNum}
          bandName={bandName}
        />
        <div className="mid-container">
          <Shows
            showsData={showsData}
          />
          <News
            postsData={postsData}
          />
        </div>
        <Social />
      </div>
    );
  }
}

export default Layout;
