import React from 'react';
import './css/Shows.css';

const ShowInfo = props => {
    let importData = props.showData;
    let importPlace = props.showPlace
    let dateInfo = new Date(importData.start_time);
    let name = importData.name
    let date = "";
    let time = "";
    let description = "";
    let city = "";
    if (importData.description !== undefined) {
      description = importData.description.substring(0, 200) + " ...";
    } else if (importPlace["location"] !== undefined) {
      city = importPlace["location"]["city"] + ", " + importPlace["location"]["state"]
    }
    let location = importPlace["name"];
    let link = "https://www.facebook.com/events/" + importData.id;

    let formatTime = function() {
      let dates = {1: "January", 2: "Febuary", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}
      date = dates[dateInfo.getMonth() + 1] + " " + dateInfo.getDate() + "th"
      let hour = dateInfo.getHours()
      let minute = dateInfo.getMinutes()
      if (minute === 0) {
        minute = "00"
      }
      if (hour === 0) {
        hour = "00"
      }
      time = hour + ":" + minute
    };

    formatTime()

    return (
        <tr className="data-row">
          <td className="show-date-child"><a href={link}>{time}<br />{date}</a></td><td><a href={link}>{location}<br /><i>{city}</i></a></td><td><a href={link}>{name}<br />{description}</a></td>
        </tr>
    );
}

export default ShowInfo;
