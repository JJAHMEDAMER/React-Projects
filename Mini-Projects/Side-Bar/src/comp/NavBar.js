import React from "react";

const NavBar = ({ comp, onClickNavbar }) => {
  return (
    <button className="navbar" onClick={()=>onClickNavbar(comp)}>
      <p className="navbar--text">{comp}</p>
      <div className="navbar--underline"></div>
    </button>
  );
};

export default NavBar;
