import React, {Component} from 'react';
import './css/News.css';

class FacebookPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        imageURL: "",
        importData: this.props.postData,
        id: this.props.postData.id
      }
    }

    componentDidMount() {
      fetch('https://graph.facebook.com/' + this.state.id + '/?fields=object_id,picture&access_token=' + process.env.REACT_APP_APPID + '|' + process.env.REACT_APP_APPSECRET)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }})
        .then((json) => {
          if (json["picture"] !== undefined) {
            return json
          } else {
            return null
          }
        })
        .then((image) => {
          this.setState({
            imageURL: image["picture"]
          })
        })
    }

    render() {
      let importData = this.props.postData;
      let message = importData.message
      let importDate = importData.created_time.replace(/-/g, '/').replace(/T/, ' ')
      let postDate = new Date(importDate)
      let link = "http://www.facebook.com/" + importData.id
      let imageURL = this.state.imageURL
      let dates = {1: "January", 2: "Febuary", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}
      let hour = postDate.getHours()
      let minute = postDate.getMinutes()
      if (minute === 0) {minute = "00"}
      if (hour === 0) {hour = "00"}
      let date = dates[postDate.getMonth() + 1] + " " + postDate.getDate() + "th   "
      let time = hour + ":" + minute

      return (
        <div className="facebook-post">
          <div className="post-image-container">
            <img src={imageURL} className="post-image"/>
          </div>
          <div className="post-text-container">
            <p>
              {message}
              <a href={link}><h2><i className="fa fa-facebook-square facebook-logo" aria-hidden="true"></i>{time} - {date}<i className="fa fa-caret-right arrow" aria-hidden="true"></i></h2></a>
            </p>
          </div>
        </div>
      );
    }

}

export default FacebookPost;
