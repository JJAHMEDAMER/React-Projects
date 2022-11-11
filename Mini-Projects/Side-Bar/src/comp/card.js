import React from "react";

//assets
import right from "../assets/right.png";

const Card = (props) => (
  <div className="card">
    <h1 className="card--title">{props.title}</h1>
    <p className="card--company">{props.company}</p>
    <p className="card--date">{props.dates}</p>

    {props.duties.map((item) => {
      return (
        <div className="card--duties">
          <img src={right} className="card--duties--img" alt="chevron right" />
          <p className="card--duties--text">{item}</p>
        </div>
      );
    })}
  </div>
);

export default Card;
