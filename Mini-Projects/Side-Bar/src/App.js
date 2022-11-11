import React, { useEffect, useState } from "react";

// Comp
import Card from "./comp/card";

// Fetch Data
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);

  async function APIRequest() {
    const response = await fetch(url);
    setData(await response.json());
  }

  console.log(data);

  useEffect(() => {
    APIRequest();
  }, []);

  console.log(data);

  const cardList = data.map((item) => <Card {...item} />);

  return (
    <div>
      <h1>App Hello World</h1>
      {cardList}
    </div>
  );
}

export default App;
