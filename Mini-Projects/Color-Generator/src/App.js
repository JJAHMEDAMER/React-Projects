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
    console.log(color);
    let tempListRGB = [];
    for (let i = 0; i < 11; i++) {
      tempListRGB.push([
        Math.round(255 - rgb[0] * i * 0.1),
        Math.round(255 - rgb[1] * i * 0.1),
        Math.round(255 - rgb[2] * i * 0.1),
      ]);
    }
    for (let i = 0; i < 11; i++) {
      tempListRGB.push([
        Math.round(rgb[0] - rgb[0] * i * 0.1),
        Math.round(rgb[1] - rgb[1] * i * 0.1),
        Math.round(rgb[2] - rgb[2] * i * 0.1),
      ]);
    }
    console.log([rgb] + tempListRGB);
    console.log(tempListRGB);

    let tempListHex = [];
    for (let item of tempListRGB) {
      tempListHex.push(rgbToHex(item[0], item[1], item[2]));
    }
    console.log(tempListHex);
    setColorList(tempListHex);
  }

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
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
      <h1 className="app--title">Generate Colors</h1>
      <ControllerBar onClickHandler={generate} onChangeHandler={getInput} />
      <div className="app--color">
        {colorList.map((item) => (
          <Card color={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
