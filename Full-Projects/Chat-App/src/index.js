import "./index.css";

// React
import React from "react";
import ReactDOM from "react-dom";

// React Router
import { BrowserRouter as Router } from "react-router-dom";

// Components
import { App } from "components";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
