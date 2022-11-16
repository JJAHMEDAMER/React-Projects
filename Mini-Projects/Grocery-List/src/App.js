import React from "react";

// Comp
import Card from "./comp/card";
import ControllerBar from "./comp/controller";

function App() {
  const [appList, setAppList] = React.useState(["eggs", "milk"]);
  function add() {
    setAppList([...appList, inputValue]);
  }

  let inputValue;
  function getInput(changedValue) {
    inputValue = changedValue;
  }

  function editButton(itemIndex) {
    alert("woow")
  }

  function deleteButton(itemIndex) {
    let newList = appList.filter((item, index) => index != itemIndex);
    setAppList(newList);
  }

  return (
    <div className="app">
      <h1 className="app--title">Grocery List</h1>
      <ControllerBar onClickHandler={add} onChangeHandler={getInput} />
      <Card
        appList={appList}
        onClickEdit={editButton}
        onClickDelete={deleteButton}
      />
    </div>
  );
}

export default App;
