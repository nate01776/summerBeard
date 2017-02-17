import React from 'react';
import FacebookPost from './FacebookPost'
import './css/News.css';

const News = props => {
  let recentPosts = [];

  let handleNewsData = function (data) {
    for (var i=0; i < data.length; i++) {
      recentPosts.push(<FacebookPost key={i} postData={data[i]}/>)
    }
  }

  handleNewsData(props.recentPost)

  return (
    <div className="news-container">
      <div className="shows-table">
        <table>
          <thead>
            <tr><th className="table-title">NEWS</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>{recentPosts}</td>
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

export default News;
