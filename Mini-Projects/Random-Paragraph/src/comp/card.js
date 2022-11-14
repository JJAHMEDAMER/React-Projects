import React from "react";

const Card = ({onClickHandle}) => (
  <div className="card">
    <div className="card--control">
      <div className="card--control">
        <p className="card--control--title">Paragraph: </p>
        <input className="card--control--input" placeholder="1" type="number"></input>
      </div>
      <button className="card--control--button" onClick={onClickHandle}>Generate</button>
    </div>
  </div>
);

export default Card;
