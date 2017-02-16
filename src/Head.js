import React from 'react';
import Music from './Music.js';
import './css/Head.css';

const Head = props => {
  let bannerImage = './border_' + props.bannerNumber + '.png';
  let topStyle = {
        backgroundImage: 'url(./background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: .5
      };

  return (
    <div>
      <div className="top-container" style={topStyle}>
      </div>
      <div className="band-info">
        <div className="banner-left" className="banner-left">
          <img src={bannerImage} role="presentation"/>
        </div>
        <div className="band-name">
          <div className="band-name-text">
            <h1>Summer<br />Beard</h1>
          </div>
          <Music />
        </div>
        <div className="banner-right">
            <img src={bannerImage} className="banner-right" role="presentation"/>
        </div>
      </div>
    </div>
  );
}

export default Head;
