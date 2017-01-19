import React from 'react'
import Shows from './Shows.js'

const Page = props => {
  let image = 'fjords.jpg'
  let topStyle = {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

  return (
    <div>
      <div className="top-container" style={topStyle}>
        <div className="band-name">
          <h1>Summer Beard</h1>
        </div>
      </div>
      <div className="shows-container">
        <Shows />
      </div>
    </div>
  );
}

export default Page;
