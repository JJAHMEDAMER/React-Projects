import React from "react";
import ReactDom from "react-dom/client"; // React 18

import { BrowserRouter } from "react-router-dom";

// Style
import "./index.css";

// App
import { App } from "./App";

const root = document.getElementById("root");
const container = ReactDom.createRoot(root);

container.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
