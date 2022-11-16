import React from "react";

const Card = ({ appList }) => {
  console.log(appList);
  return (
    <div className="item">
      <h1 className="item--number"># of Items:: {appList.length}</h1>
      <div className="card">
        {appList.map((item, index) => (
          <div>
            <p className="item--name">
              {index + 1}. {item}
            </p>
            {!(index + 1 == appList.length) && <div className="hr-line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
