import React from 'react';
import './css/Shows.css';

const ShowInfo = props => {
  debugger;
    let importData = props.showData;
    let importPlace = props.placeData;
    let dateInfo = new Date(importData.start_time);
    let date = ""
    let time = ""
    let description = importData.description;
    let link = "https://www.facebook.com/events/" + importData.id

    let formatTime = function() {
      let dates = {1: "January", 2: "Febuary", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}
      date = dates[dateInfo.getMonth()] + " " + dateInfo.getDate() + "th"
      let hour = dateInfo.getHours()
      let minute = dateInfo.getMinutes()
      if (minute === 0) {
        minute = "00"
      }
      time = hour + ":" + minute
    }();

    return (
        <tr className="data-row">
          <td className="show-date-child"><a href={link}>{date}<br />{time}</a></td><td></td><td>{description}</td>
        </tr>
    );
}

export default ShowInfo;
