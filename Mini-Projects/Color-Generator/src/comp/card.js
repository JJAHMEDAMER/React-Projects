import React from "react";

const Card = ({ color, code }) => {
  // const style = {
  //   backgroundColor: "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")",
  // };
  const style = {
    backgroundColor: color,
  };
  return (
    <div className="card color">
      <div className="color--view" style={style}></div>
      <h1 className="color--code">{color}</h1>
    </div>
  );
};

export default Card;
