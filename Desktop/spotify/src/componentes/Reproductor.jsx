import React, { useState } from "react";
import Botones from "./Botones.jsx";
import Canciones from "./Canciones.jsx";

const Reproductor = () => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      category: "game",
      name: "Mario Castle",
      url: "files/mario/songs/castle.mp3",
    },
    {
      id: 2,
      category: "game",
      name: "Mario Star",
      url: "files/mario/songs/hurry-starman.mp3",
    },
    {
      id: 3,
      category: "game",
      name: "Mario Overworld",
      url: "files/mario/songs/overworld.mp3",
    },
    {
      id: 4,
      category: "game",
      name: "Mario Castle",
      url: "files/mario/songs/castle.mp3",
    },
    {
      id: 5,
      category: "game",
      name: "Mario Star",
      url: "files/mario/songs/hurry-starman.mp3",
    },
    {
      id: 6,
      category: "game",
      name: "Mario Overworld",
      url: "files/mario/songs/overworld.mp3",
    },
  ]);

  const crearCanciones = (s) => {
    return <Canciones key={s.id} id={s.id} cancion={s.name} url={s.url} />;
  };
  return (
    <div className="container-fluid bg-secondary vh-100">
      <div className="container w-50 bg-dark vh-100 rounded">
        {songs.map(crearCanciones)}
      </div>
      <Botones pausa={} play={} siguiente={} anterior={}/>
    </div>
  );
};

export default Reproductor;
