import React from 'react';
import './css/Music.css';

const Music = props => {
    var player = <iframe style={{border: "0", width: "600px", height: "250px", padding: "5px", paddingBottom: "0"}} src="https://bandcamp.com/EmbeddedPlayer/album=1313641830/size=large/bgcol=ffffff/linkcol=FF2997/artwork=small/transparent=true/" seamless><a href="http://summerbeard.bandcamp.com/album/the-little-pink-ep">The Little Pink EP by Summer Beard</a></iframe>

    if (document.documentElement.clientWidth < 601) {
      player = <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1313641830/size=large/bgcol=ffffff/linkcol=FF2997/tracklist=false/artwork=none/transparent=true/" seamless><a href="http://summerbeard.bandcamp.com/album/the-little-pink-ep">The Little Pink EP by Summer Beard</a></iframe>
    }

    return (
      <div className="music-player">
        {player}
      </div>
    );
}

export default Music;
