import React from 'react';
import './css/Music.css';

const Music = props => {
    var player = <iframe style={{border: "0", width: "600px", height: "250px", padding: "5px", paddingBottom: "0"}} src="https://bandcamp.com/EmbeddedPlayer/album=1636732980/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://summerbeard.bandcamp.com/album/sympathy-for-keith-2018">Sympathy for Keith (2018) by Summer Beard</a></iframe>

    if (document.documentElement.clientWidth < 601) {
      player = <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1636732980/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://summerbeard.bandcamp.com/album/sympathy-for-keith-2018">Sympathy for Keith (2018) by Summer Beard</a></iframe>
    }

    return (
      <div className="music-player">
        {player}
      </div>
    );
}

export default Music;
