import React, { Component } from 'react';
import './css/News.css';

class News extends Component {
  render() {
    return (
      <div className="news-container">
        <div className="shows-table">
          <table>
            <thead>
              <tr><th>NEWS</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.newsData}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default News;
