import React from "react";
import ReactDom from "react-dom/client"; // React 18

// App
import { App } from "./App";

const root = document.getElementById("root");
const container = ReactDom.createRoot(root); 

container.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
