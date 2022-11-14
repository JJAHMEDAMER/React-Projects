import React from "react";

const Card = () => (
  <div className="card">
    <div className="card--control">
      <div className="card--control">
        <p className="card--control--title">Paragraph: </p>
        <input className="card--control--input" placeholder="1"></input>
      </div>
      <button className="card--control--button">Generate</button>
    </div>
  </div>
);

export default Card;
