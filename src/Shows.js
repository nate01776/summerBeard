import React, { Component } from 'react';
import ShowInfo from './ShowInfo'
import './css/Shows.css';

const Shows = props => {
  let upcomingShows = []
  let handleShowData = function(data) {
    for (var i = 0; i < data.length; i++) {
      let show = data[i];
      let showDate = new Date(show.start_time)
      if (showDate > Date.now()) {
        upcomingShows.unshift(< ShowInfo key={i} showData={data[i]}/>)
      }
    }
  };

  handleShowData(props.showData)

  return (

    <div className="shows-container">
      <div className="shows-table">
        <table>
          <thead>
            <tr><th colSpan="4" className="table-title">UPCOMING  SHOWS</th></tr>
          </thead>
          <tbody>
            <tr className="top-row">
              <td className="show-time">WHEN</td><td>WHERE</td><td className="show-info">WHAT</td>
            </tr>
            {upcomingShows}
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

export default Shows;
