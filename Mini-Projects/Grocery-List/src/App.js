import React from "react";

// Comp
import Card from "./comp/card";
import ControllerBar from "./comp/controller";

function App() {
  const [appList, setAppList] = React.useState(["eggs", "milk"]);
  function add() {
    console.log(inputValue);
    setAppList([...appList, inputValue]);
  }

  let inputValue;
  function getInput(changedValue) {
    inputValue = changedValue;
  }
  return (
    <div>
      <h1>App Hello World</h1>
      <ControllerBar onClickHandler={add} onChangeHandler={getInput} />
      <Card appList={appList} />
    </div>
  );
}

export default App;
