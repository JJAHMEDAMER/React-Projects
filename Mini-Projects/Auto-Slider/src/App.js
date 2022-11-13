import React from "react";

//data
import data from "./data";

// Comp
import Card from "./comp/card";

// image
import nextChevron from "./assets/next.png";

function App() {
  const [index, setIndex] = React.useState(0);

  function next() {
    if (index >= data.length - 1) {
      setIndex(0);
    } else {
      let newIndex = index + 1;
      setIndex(newIndex);
    }
  }

  function back() {
    if (index <= 0) {
      setIndex(data.length - 1);
    } else {
      let newIndex = index - 1;
      setIndex(newIndex);
    }
  }

  return (
    <div className="app">
      <img
        className="app--back"
        src={nextChevron}
        alt="backward"
        onClick={back}
      />
      <div>
        <Card {...data[index]} />
      </div>
      <img
        className="app--next"
        src={nextChevron}
        alt="forward"
        onClick={next}
      />
    </div>
  );
}

export default App;
