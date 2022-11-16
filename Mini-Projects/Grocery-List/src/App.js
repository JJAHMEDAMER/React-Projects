import React from "react";

// Comp
import Card from "./comp/card";
import ControllerBar from "./comp/controller";

function App() {
  function add() {}

  let inputValue;
  function getInput(changedValue) {
    inputValue = changedValue;
  }
  return (
    <div>
      <h1>App Hello World</h1>
      <Card />
      <ControllerBar onClickHandler={add} onChangeHandler={getInput} />
    </div>
  );
}

export default App;
