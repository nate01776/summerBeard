import React from 'react';
import './css/Social.css';

const Social = props =>  {
  var iconSize = "fa-2x"
  if (document.documentElement.clientWidth > 601) {
    iconSize = "fa-3x"
  }

  return (
    <div className="shows-header">
      <a href="https://www.facebook.com/summerbeardmusic">
        <i className={"fa fa-facebook-square " + iconSize + " social-logo facebook"} aria-hidden="true"></i>
      </a>
      <a href="https://www.instagram.com/summerbeard/">
        <i className={"fa fa-instagram  " + iconSize + " social-logo instagram"} aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com/search?q=%23summerbeard&src=typd&lang=en">
        <i className={"fa fa-twitter-square " + iconSize + " social-logo twitter"} aria-hidden="true"></i>
      </a>
      <a href="https://summerbeard.bandcamp.com/releases">
        <i className={"fa fa-bandcamp " + iconSize + " social-logo bandcamp"} aria-hidden="true"></i>
      </a>
    </div>

  );
}

export default Social;
