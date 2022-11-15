import React from "react";

const ControllerBar = () => (
  <div className="control card">
    <div className="flex">
      <h1 className="control--text">Color Code: </h1>
      <input className="control--input" placeholder="#ffffff"></input>
    </div>
    <button className="control--button">Generator</button>
  </div>
);

export default ControllerBar;
