import React, { Component } from 'react';
import './App.css';

class Music extends Component {
  render() {
    var player = <iframe style={{border: "0", width: "600px", height: "340px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1718308973/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://summerbeard.bandcamp.com/album/no-noises-no-sounds">No Noises No Sounds by Summer Beard</a></iframe>
    return (
      <div className="music-player">
        {player}
      </div>
    );
  }
}

export default Music;
