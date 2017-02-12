import React, { Component } from 'react';
import './css/Shows.css';

class Shows extends Component {
  render() {
    return (
      <div className="shows-container">
        <div className="shows-table">
          <table>
            <thead>
              <tr><th colSpan="4" className="table-title">SHOWS</th></tr>
            </thead>
            <tbody>
              <tr className="top-row">
                <td>Date</td><td>Time</td><td>Location</td><td>$</td>
              </tr>
              <tr>
                <td>{this.props.showData}</td><td>8:00</td><td>Great Scotts, Allston</td><td>$7</td>
              </tr>
              <tr>
                <td>2/10/17</td><td>9:00</td><td>Plough & Stars, Cambridge</td><td>$5</td>
              </tr>
            </tbody>
          </table>
          <a href="https://summerbeard.bandcamp.com/contact?b=2531780277&n=Summer%20Beard">
          <div className="shows-contact">
            <p>Contact Summer Beard</p>
          </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Shows;
