import React from "react";

// Comp
import Card from "./comp/card";
import CardParagraph from "./comp/paragraph";

//data
import data from "./data";

function App() {
  const [index, setIndex] = React.useState(0);

  let newIndex = 0;
  function newValue(change) {
    if (change < 0) {
      newIndex = 0;
    } else {
      newIndex = change;
    }
  }
  function para() {
    setIndex(newIndex);
  }
  return (
    <div>
      <h1 className="app--title">Tired of Lorem Ipsum</h1>
      <Card onClickHandle={para} onChangeHandle={newValue} />
      {data.slice(0, index).map((item) => {
        return <CardParagraph list={item} />;
      })}
    </div>
  );
}

export default App;
