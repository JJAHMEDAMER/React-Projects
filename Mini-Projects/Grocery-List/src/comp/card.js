import React from "react";

//assets
import trash from "../assets/trash.png";
import pen from "../assets/pen.png";

const Card = ({ appList, onClickDelete, onClickEdit }) => {
  console.log(appList);
  return (
    <div className="item">
      <h1 className="item--number"># of Items:: {appList.length}</h1>
      <div className="card">
        {appList.map((item, index) => (
          <div>
            <div className="item--section">
              <p className="item--name">
                <span className="item--index">{index + 1}.</span> {item}
              </p>
              <div>
                <img
                  src={pen}
                  className="item--img"
                  alt="edit"
                  onClick={onClickEdit}
                />
                <img
                  src={trash}
                  className="item--img"
                  alt="delete"
                  onClick={onClickDelete}
                />
              </div>
            </div>
            {!(index + 1 === appList.length) && <div className="hr-line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
