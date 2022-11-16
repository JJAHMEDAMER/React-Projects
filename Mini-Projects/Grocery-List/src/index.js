import React from "react";
import { createRoot } from "react-dom/client";

//Style
import "./App.css";

//comp
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
