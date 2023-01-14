import React from "react";
import a from "../../../assets/planets/mars.png";

const index = () => {
  return (
    <section id="mars">
      <div className="d-flex flex-column justify-content-center align-items-center h-80 gap-4 box">
        <h1 className="text-white">Mars</h1>
        <img src={a} alt="" className="planet-img" />
      </div>
    </section>
  );
};

export default index;
