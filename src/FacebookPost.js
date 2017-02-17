import React from 'react';
import './css/News.css';

const FacebookPost = props => {
    let importData = props.postData;
    let message = importData.message
    let postDate = new Date(importData.created_time)
    let date = "";
    let time = "";

    let formatTime = function() {
      let dates = {1: "January", 2: "Febuary", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}
      date = dates[postDate.getMonth()] + " " + postDate.getDate() + "th"
      let hour = postDate.getHours()
      let minute = postDate.getMinutes()

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
        <div className="facebook-post">
          {message}<br />
          {time} - {date}
        </div>
    );
}

export default FacebookPost;
