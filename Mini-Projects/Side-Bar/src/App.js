import React, { useEffect, useState } from "react";

// Comp
import Card from "./comp/card";
import NavBar from "./comp/NavBar";

// Fetch Data
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  async function APIRequest() {
    const response = await fetch(url);
    setData(await response.json());
  }

  useEffect(() => {
    APIRequest();
  }, []);

  const cardList = data.map((item) => <Card {...item} />);

  function navbarFunc(compName) {
    for (var i = 0; i < data.length; i++) {
      if (data[i]["company"] === compName) {
        setIndex(i);
      }
    }
  }
  
  const navBarList = data.map((item) => (
    <NavBar comp={item["company"]} onClickNavbar={navbarFunc} />
  ));

  return (
    <div className="app">
      <h1 className="app--title">Experience</h1>
      <div className="app--content">
        <div className="app--navbar">{navBarList}</div>
        <div className="app--divider"></div>
        <div className="app--card">{cardList[index]}</div>
      </div>
    </div>
  );
}

export default App;
