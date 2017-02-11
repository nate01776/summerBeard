import React, { Component } from 'react';
import './css/News.css';

class News extends Component {
  render() {
    return (
      <div className="shows-table">
        <table>
          <thead>
            <tr><th>NEWS</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>new album coming 2017!</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default News;
