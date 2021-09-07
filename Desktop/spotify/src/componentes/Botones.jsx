import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Botones = (props) => {
  const btnSiguiente = (
    <FontAwesomeIcon onClick={props.siguiente} icon={faForward} />
  );
  const btnPausa = (
    <FontAwesomeIcon onClick={props.pausa} icon={faPauseCircle} />
  );
  const btnPlay = <FontAwesomeIcon onClick={props.play} icon={faPlayCircle} />;
  const btnAnterior = (
    <FontAwesomeIcon onClick={props.anterior} icon={faBackward} />
  );

  return (
    <div className="footer fixed-bottom ">
      <div className="container text-center text-white fs-1 ">
        {btnAnterior} {btnPausa} {btnPlay} {btnSiguiente}
      </div>
    </div>
  );
};

Botones.propTypes = {
  siguiente: PropTypes.func,
  pausa: PropTypes.func,
  play: PropTypes.func,
  anterior: PropTypes.func,
};

export default Botones;
