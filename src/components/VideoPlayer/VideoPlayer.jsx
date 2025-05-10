import React, { use, useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/VideoPlayer.mp4";

const VideoPlayer = ({ PlayState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  //Esta funcion es para cerrar el video haciendo click fuera del marco

  return (
    <div
      className={`video-player ${PlayState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
