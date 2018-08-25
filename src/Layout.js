import React, { Component } from 'react';
import Shows from '../src/Shows.js'
import News from '../src/News.js'
import Social from '../src/Social.js'
import Head from './Head.js'

const Layout = props => {
  let bannerNum = 1;
  let postsData = props.postsData;
  let showsData = props.showsData;
  let bandName = props.bandName;

  return(
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
  )
}

export default Layout;
