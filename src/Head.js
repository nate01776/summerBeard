import React from 'react';
import Music from './Music.js';
import './css/Head.css';

const Head = props => {
  let bannerImage = './border_' + props.bannerNumber + '.png';
  let bandName = props.bandName;
  let bandInfo = props.bandInfo;
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
      <div className="band-head">
        <div className="banner-left">
          <img src={bannerImage} role="presentation"/>
        </div>
        <div className="band-name">
          <div className="band-name-text">
            <h1>{bandName}</h1>
          </div>
          <Music />
          <div className="band-info-container">
            <div className="band-info">
              <p>{bandInfo}</p>
            </div>
          </div>
        </div>
        <div className="banner-right">
            <img src={bannerImage} className="banner-right" role="presentation"/>
        </div>
      </div>
    </div>
  );
}

export default Head;
