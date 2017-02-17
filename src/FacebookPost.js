import React from 'react';
import './css/News.css';

const FacebookPost = props => {
    let importData = props.postData;
    let message = importData.message
    let postDate = new Date(importData.created_time)
    let date = "";
    let time = "";
    let link = "http://www.facebook.com/" + importData.id

    let pullPostData = function(request) {

    }

    let formatTime = function(input) {
      let dates = {1: "January", 2: "Febuary", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}
      date = dates[input.getMonth()] + " " + input.getDate() + "th   "
      let hour = input.getHours()
      let minute = input.getMinutes()

      if (minute === 0) {
        minute = "00"
      }
      if (hour === 0) {
        hour = "00"
      }
      time = hour + ":" + minute
    };

    formatTime(postDate)
    pullPostData(importData)

    return (

        <div className="facebook-post">
          <p>{message}</p>
          <a href={link}><h2><i className={"fa fa-facebook-square facebook-logo"} aria-hidden="true"></i>{time} - {date}<i className="fa fa-caret-right arrow" aria-hidden="true"></i></h2></a>
        </div>
    );
}

export default FacebookPost;
