import React from 'react'
import Shows from './Shows.js'
import Music from './Music.js'
import News from './News.js'
import Social from './Social.js'

const Page = props => {
  let image = 'fjords.jpg';
  let topStyle = {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      };

  return (
    <div>
      <div className="top-container" style={topStyle}>
        <div className="band-name">
          <h1>Summer Beard</h1>
        </div>
      </div>
      <div className="mid-container">
        <div className="shows-container">
          <Shows />
        </div>
        <div className="news-container">
          <News />
        </div>
      </div>
      <div className="music-container">
        <Music />
      </div>
      <div className="social-container">
        <Social />
      </div>
    </div>
  );
}

export default Page;
