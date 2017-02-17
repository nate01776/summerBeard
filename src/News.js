import React, { Component } from 'react';
import './css/News.css';

class News extends Component {
  render() {
    return (
      <div className="news-container">
        <div className="shows-table">
          <table>
            <thead>
              <tr><th className="table-title">NEWS</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.newsData}</td>
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

export default News;
