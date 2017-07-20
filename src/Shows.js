import React from 'react';
import ShowInfo from './ShowInfo'
import './css/Shows.css';

const Shows = props => {
  let upcomingShows = [];
  let showHeader = [];

  let handleShowData = function(data) {
    for (var i = 0; i < data.length; i++) {
      let show = data[i];
      let showPlace = show["place"]
      let showDate = new Date(show.start_time)
    
      if (showDate > Date.now()) {
        console.log('hi')
        upcomingShows.unshift(<ShowInfo key={i} showData={data[i]} showPlace={showPlace} />)
      }
    }

    if (upcomingShows.length === 0) {
      showHeader = <tr className="top-row"><td colSpan="4" className="check-back">check back soon for more dates!</td></tr>
    } else {
      showHeader = <tr><td>DATE</td><td>LOCATION</td><td>INFO</td></tr>
    }
  };

  handleShowData(props.showsData)

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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Shows;
