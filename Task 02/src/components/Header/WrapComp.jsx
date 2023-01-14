import React from "react";
import "../../App.css";

const WrapComp = () => {
  return (
    <div className="wrapper">
      <h1 className="text-white fs-1">Lets Explore Our Galaxy</h1>
      <a href="#mercury">
        <i className="fa-solid fa-chevron-down text-white icon pb-4"></i>
      </a>
    </div>
  );
};

export default WrapComp;
