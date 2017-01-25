import React, { Component } from 'react';
import './App.css';
<iframe style="border: 0; width: 400px; height: 340px;" src="https://bandcamp.com/EmbeddedPlayer/album=1718308973/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="http://summerbeard.bandcamp.com/album/no-noises-no-sounds">No Noises No Sounds by Summer Beard</a></iframe>
class Music extends Component {
  render() {
    var player = <iframe style={{border: "0", width: "400px", height: "300px"}} src='https://bandcamp.com/EmbeddedPlayer/album=1718308973/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/' seamless><a href='http://summerbeard.bandcamp.com/album/no-noises-no-sounds'>No Noises No Sounds by Summer Beard</a></iframe>
    return (
      <div className="shows-header">
        <div className="music-title">
          <h1>MUSIC</h1>
        </div>
        <div className="music-content">
          <div className="album-art">
            <img src="https://f4.bcbits.com/img/a2843028506_16.jpg" />
          </div>
          <div className="music-player">
            {player}
          </div>
        </div>
      </div>

    );
  }
}

export default Music;
