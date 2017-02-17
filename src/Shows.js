import React from 'react';
import ShowInfo from './ShowInfo'
import './css/Shows.css';

const Shows = props => {
  let upcomingShows = [];
  let previousShows = [];
  let showHeader = [];

  let handleShowData = function(data) {
    for (var i = 0; i < data.length; i++) {
      let show = data[i];
      let showPlace = show["place"]
      let showDate = new Date(show.start_time)

      if (showDate > Date.now()) {
        upcomingShows.unshift(<ShowInfo key={i} showData={data[i]} showPlace={showPlace} />)
      } else if (previousShows.length < 3){
        previousShows.push(<ShowInfo key={i} showData={data[i]} showPlace={showPlace} />)
      }
    }

    if (upcomingShows.length === 0) {
      showHeader = <tr className="top-row"><td colSpan="4" className="check-back">check back soon for more dates!</td></tr>
    } else {
      showHeader = <tr><td>DATE</td><td>LOCATION</td><td>INFO</td></tr>
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
            {showHeader}
            {upcomingShows}
            <tr className="">
              <th colSpan="4" className="previous-title">PREVIOUS SHOWS</th>
            </tr>
            <tr className="top-row">
              <td className="show-time">DATE</td><td>LOCATION</td><td className="show-info">INFO</td>
            </tr>
            {previousShows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Shows;
