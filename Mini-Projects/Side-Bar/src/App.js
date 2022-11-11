import React, { useEffect, useState } from "react";

// Comp
import Card from "./comp/card";
import NavBar from "./comp/NavBar";

// Fetch Data
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);

  async function APIRequest() {
    const response = await fetch(url);
    setData(await response.json());
  }

  useEffect(() => {
    APIRequest();
  }, []);

  const cardList = data.map((item) => <Card {...item} />);

  function navbarFunc() {
    alert("worklink");
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
        <div className="app--card">{cardList[0]}</div>
      </div>
    </div>
  );
}

export default App;
