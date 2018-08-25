import React from 'react';
import './css/News.css';

const News = props => {
  let recentPosts = [];

  let handleNewsData = function (data) {
    for (var i=0; i < data.length; i++) {
      if (data[i].message !== undefined && i < 20) {
        recentPosts.push("data ")
      }
    }
  }

  handleNewsData(props.postsData)

  return (
    <div className="news-container">
      <div className="news-table">
        <table>
          <thead>
            <tr><th className="table-title">RECENT POSTS</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {recentPosts}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default News;
