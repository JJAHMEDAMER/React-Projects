import React from "react";

// Comp
import Card from "./comp/card";
import ControllerBar from "./comp/controller";

function App() {
  const [appList, setAppList] = React.useState(["eggs", "milk", "bread"]);
  const [editIndex, setEditIndex] = React.useState(-1);

  function add() {
    setAppList([...appList, inputValue]);
  }

  let inputValue;
  function getInput(changedValue) {
    inputValue = changedValue;
  }

  function editButton(itemIndex) {
    if (itemIndex === editIndex) {
      setEditIndex(-1);
    } else {
      setEditIndex(itemIndex);
    }
  }

  function deleteButton(itemIndex) {
    let newList = appList.filter((item, index) => index !== itemIndex);
    setAppList(newList);
  }

  return (
    <div className="app">
      <h1 className="app--title">Grocery List</h1>
      <ControllerBar onClickHandler={add} onChangeHandler={getInput} />
      {!(appList.length === 0) && (
        <Card
          appList={appList}
          onClickEdit={editButton}
          onClickDelete={deleteButton}
          editIndex={editIndex}
          setAppList={setAppList}
        />
      )}
    </div>
  );
}

export default App;
