import React, { Component } from 'react';
import './App.css';

class Social extends Component {
  render() {
    return (
      <div className="shows-header">
        <a href="https://www.facebook.com/summerbeardmusic">
          <i className="fa fa-facebook-square fa-3x social-logo facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/summerbeard/">
          <i className="fa fa-instagram fa-3x social-logo instagram" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/search?q=%23summerbeard&src=typd&lang=en">
          <i className="fa fa-twitter-square fa-3x social-logo twitter" aria-hidden="true"></i>
        </a>
        <a href="https://summerbeard.bandcamp.com/releases">
          <i className="fa fa-bandcamp fa-3x social-logo bandcamp" aria-hidden="true"></i>
        </a>
      </div>

    );
  }
}

export default Social;
