import React from "react";

//data
import data from "./data";

// Comp
import Card from "./comp/card";

// image
import next from "./assets/next.png";

function App() {
  return (
    <div className="app">
      <img className="app--back" src={next} alt="backward" />
      <div>
        <Card {...data[0]} />
      </div>
      <img className="app--next" src={next} alt="forward" />
    </div>
  );
}

export default App;
