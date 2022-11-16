import React from "react";

// Comp
import Card from "./comp/card";
import ControllerBar from "./comp/controller";

function App() {
  let color;
  const [colorList, setColorList] = React.useState([]);
  function getInput(changedValue) {
    color = changedValue;
  }

  function generate() {
    let rgb = hexToRgb(color);
    for (let i = 0; i < 19; i++) {}
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : null;
  }

  return (
    <div>
      <h1>App Hello World</h1>
      <ControllerBar onClickHandler={generate} onChangeHandler={getInput} />
      <div className="app--color">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
