import React from "react";
import { useState } from "react";
import {} from "react-bootstrap";
const PlanetComp = (props) => {
  const [show, setShow] = useState(false);

  return (
    <section id={props.idPlanet}>
      <div className="d-flex flex-column justify-content-center align-items-center h-80 gap-4 box">
        <h1 className="text-white">{props.namePlanet}</h1>
        <div className="d-flex align-items-start gap-4 custom-box">
          <img src={props.imagePlanet} alt="" className="planet-img pb-4" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} />
          {show && (
            <ul className="text-white planet mt-4">
              <li>Diameter: {props.diameter}</li>
              <li>
                Density: {props.density}
                <sup>3</sup>
              </li>
              <li>Length of day: {props.length} hours</li>
              <li>Revolution Period: {props.revolution}</li>
              <li>Rotation Period: {props.rotation} days</li>
              <li>
                Gravity: {props.gravity}
                <sup>2</sup>
              </li>
              <li>Mass: {props.mass}</li>
              <li>Number of moons: {props.moon}</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlanetComp;
