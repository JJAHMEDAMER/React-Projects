import React from "react";

const Card = ({ onClickHandle, onChangeHandle }) => (
  <div className="card">
    <div className="card--control">
      <div className="card--control">
        <p className="card--control--title">Paragraph: </p>
        <input
          className="card--control--input"
          onChange={(change) => onChangeHandle(change.target.value)}
          placeholder="0"
          type="number"
        ></input>
      </div>
      <button className="card--control--button" onClick={onClickHandle}>
        Generate
      </button>
    </div>
  </div>
);

export default Card;
