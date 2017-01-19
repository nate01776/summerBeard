import React, { Component } from 'react';
import './App.css';

class Social extends Component {
  render() {
    return (
      <div className="shows-header">
        <i className="fa fa-facebook-square fa-3x social-logo facebook" aria-hidden="true"></i>
        <i className="fa fa-instagram fa-3x social-logo instagram" aria-hidden="true"></i>
        <i className="fa fa-twitter-square fa-3x social-logo twitter" aria-hidden="true"></i>
      </div>

    );
  }
}

export default Social;
