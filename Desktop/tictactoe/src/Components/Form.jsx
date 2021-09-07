import React, { useState } from "react";
import "./components.css";
import Game from "./Game.jsx";

const Form = () => {
  var [isFilled, setIsFilled] = useState(false);
  const validate = () => {
    let input1 = document.getElementById("1");
    let input2 = document.getElementById("2");

    if (input1.value !== "" && input2.value !== "") {
      setIsFilled(true);
    } else {
      alert("Favor llene los nombres");
    }
  };

  const evaluar = () => {};

  return (
    <div>
      {isFilled ? (
        <Game />
      ) : (
        <div className="container-fluid bigContainer d-flex justify-content-center align-items-center bg-dark text-white">
          <div className="container">
            <div className="container">
              <h1>Tic Tac Toe in React.js</h1>
              <h2>Pick a Weapon </h2>
            </div>
            <div className="container w-50 mx-auto bg-secondary text-white m-5 rounded p-3">
              <div className="row my-5">
                <div className="col-12 text-center fs-3">
                  Choose your Weapon
                </div>
              </div>
              <div className="row my-5">
                <div className="col-6">
                  <input
                    class="form-control text-center"
                    id="1"
                    type="text"
                    placeholder="Player 1 username"
                  />
                </div>
                <div className="col-6">
                  <input
                    class="form-control text-center"
                    id="2"
                    type="text"
                    placeholder="Player 2 username"
                  />
                </div>
              </div>
              <div className="row my-5">
                <div className="col-6">
                  <button
                    onClick={validate}
                    id="btnX"
                    className="btn btn-outline-dark btn-lg fs-5"
                  >
                    X
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={validate}
                    id="btnO"
                    className="btn btn-outline-dark btn-lg fs-5"
                  >
                    O
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
