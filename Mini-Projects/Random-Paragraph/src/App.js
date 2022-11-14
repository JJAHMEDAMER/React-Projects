import React from "react";

// Comp
import Card from "./comp/card";
import CardParagraph from "./comp/paragraph";

//data
import data from "./data";

function App() {
  const [index, setIndex] = React.useState(0);

  function newValue(change) {
    // newIndex = change;
    setIndex(change)
    console.log(change)
  }
  function para() {
    setIndex(5);
  }
  return (
    <div>
      <h1>App Hello World</h1>
      <Card onClickHandle={para} onChangeHandle={newValue} />
      {data.slice(0, index).map((item) => {
        return <CardParagraph list={item} />;
      })}
    </div>
  );
}

export default App;
