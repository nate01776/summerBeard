import React, {Component} from 'react';
import './css/News.css';

class FacebookPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        postData: this.props.postData,
        id: this.props.postData.id
      }
    }

    render() {
      let importData = this.state.postData;
      let message = importData.message
      let importDate = importData.created_time.replace(/-/g, '/').replace(/T/, ' ')
      let postDate = new Date(importDate)
      let link = "http://www.facebook.com/" + importData.id
      let imageURL = importData["picture"]
      let dates = {1: "January", 2: "Febuary", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}
      let hour = postDate.getHours()
      let minute = postDate.getMinutes()
      if (minute === 0) {minute = "00"}
      if (hour === 0) {hour = "00"}
      if (minute < 10) {minute = "0" + minute}
      let date = dates[postDate.getMonth() + 1] + " " + postDate.getDate() + "th   "
      let time = hour + ":" + minute

      return (
        <div className="facebook-post">
          <div className="post-image-container">
            <img src={imageURL} className="post-image" role="presentation"/>
          </div>
          <div className="post-text-container">
            <p>
              {message}
            </p>
            <a href={link} className="facebook-box"><h2><i className="fa fa-facebook-square facebook-logo" aria-hidden="true"></i>{time} - {date}<i className="fa fa-caret-right arrow" aria-hidden="true"></i></h2></a>
          </div>
        </div>
      );
    }

}

export default FacebookPost;
