import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form.jsx";
import Game from "./Components/Game.jsx";

function App() {
  /* return <div className="App">{isFilled ? <Game /> : <Form />}</div>; */
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
