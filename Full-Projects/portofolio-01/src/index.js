import React from "react";
import ReactDom from "react-dom/client";

// App Component
import { App } from "./App";

const root = document.getElementById("root");
const RootConvas = ReactDom.createRoot(root);

RootConvas.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
