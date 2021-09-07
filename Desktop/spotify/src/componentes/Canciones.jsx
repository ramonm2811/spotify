import React, { useState } from "react";
import PropTypes from "prop-types";

const Canciones = (props) => {
  let [playing, setPlaying] = useState(false);
  const playMusic = () => {
    document.querySelector(`#audio${props.id}`).play();
    setPlaying(true);
  };

  return (
    <div
      id={props.id}
      onClick={playMusic}
      className={
        playing
          ? "bg-warning text-white border-white container fs-5 border border-top-0 border-end-0 border-start-0"
          : "bg-dark text-white border-white container fs-5 border border-top-0 border-end-0 border-start-0"
      }
      //className="container bg-light text-white fs-5 border border-top-0 border-end-0 border-start-0 border-white"
    >
      <p className="me-4">
        <span className="mx-4">{props.id}</span>
        {props.cancion}
      </p>
      <audio
        id={`audio${props.id}`}
        src={"https://assets.breatheco.de/apis/sound/" + props.url}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
};

Canciones.propTypes = {
  id: PropTypes.number,
  cancion: PropTypes.string,
  funcionOnClick: PropTypes.func,
  url: PropTypes.string,
  autoPlay: PropTypes.string,
};

export default Canciones;
