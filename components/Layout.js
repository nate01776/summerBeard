import React, { Component } from 'react';
import Shows from '../src/Shows.js'
import News from '../src/News.js'
import Social from '../src/Social.js'
import Head from './Head.js'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
       bannerCount: 1,
    }
  }

  // <News
  //   postsData={postsData}
  // />

  render() {
    let bannerNum = this.state.bannerCount;
    let postsData = this.props.postsData;
    let showsData = this.props.showsData;
    let bandName = this.props.bandName

    return (
      <div>
        <Head
          bannerNumber={bannerNum}
          bandName="SUMMER BEARD"
        />
        <div className="mid-container">
          <Shows
            showsData={showsData}
          />

        </div>
        <Social />
      </div>
    );
  }
}

export default Layout;
