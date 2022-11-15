import React from "react";

const ControllerBar = ({ onClickHandler, onChangeHandler }) => (
  <div className="control card">
    <div className="flex">
      <h1 className="control--text">Color Code: </h1>
      <input
        className="control--input"
        placeholder="#ffffff"
        onChange={(change) => onChangeHandler(change.target.value)}
      ></input>
    </div>
    <button className="control--button" onClick={onClickHandler}>
      Generator
    </button>
  </div>
);

export default ControllerBar;
