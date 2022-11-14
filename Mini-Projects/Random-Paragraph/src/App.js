import React from "react";

// Comp
import Card from "./comp/card";
import CardParagraph from "./comp/paragraph";

//data
import data from "./data";

function App() {
  return (
    <div>
      <h1>App Hello World</h1>
      <Card />
      <CardParagraph list={data[1]} />
    </div>
  );
}

export default App;
