import React from "react";

const Card = (props) => (
  <div className="card">
    <img className="card--image" src={props.image} alt={props.name}/>
    <h1 className="card--name">{props.name}</h1>
    <p className="card--title">{props.title}</p>
    <p className="card--quote">{props.quote}</p>
  </div>
);

export default Card;
