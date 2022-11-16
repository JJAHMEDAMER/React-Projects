import React from "react";

const Card = ({ color, code }) => {
  // const style = {
  //   backgroundColor: "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")",
  // };
  const [copiedAlert, setCopiedAlert] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => setCopiedAlert(false), 2500);
    return () => setInterval(timer);
  }, [copiedAlert]);

  function copied() {
    setCopiedAlert(true);
    navigator.clipboard.writeText(color);
  }

  const style = {
    backgroundColor: color,
  };
  return (
    <div className="card color" onClick={copied}>
      <div className="color--view" style={style}>
        {copiedAlert && <p className="color--copied">Copied</p>}
      </div>
      <h1 className="color--code">{color}</h1>
    </div>
  );
};

export default Card;
