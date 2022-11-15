import React from "react";

// Comp
import Card from "./comp/card";
import ControllerBar from "./comp/controller";

function App() {
  let color;
  function getInput(changedValue) {
    color = changedValue;
  }



  return (
    <div>
      <h1>App Hello World</h1>
      <ControllerBar onChangeHandler={getInput} />
      <Card />
    </div>
  );
}

export default App;
