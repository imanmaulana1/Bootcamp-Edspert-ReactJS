import React, { useState } from "react";
import "../../App.css";
import { Row, Col } from "react-bootstrap";

const BarComp = () => {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    console.log(active);
    setActive(!active);
  };

  const closeToggle = () => {
    console.log(active);
    setActive(!active);
  };
  console.log(active);
  return (
    <>
      <Row>
        <Col>
          <i className="fas fa-bars p-4 menu-btn " onClick={handleToggle}></i>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <ul className={active === true ? "list active " : "list"}>
            <li className="fs-3 mb-2 p-4">
              <a href="#mercury" onClick={closeToggle}>
                Mercury
              </a>
            </li>
            <li className="fs-3 mb-2 p-4">
              <a href="#venus" onClick={closeToggle}>
                Venus
              </a>
            </li>
            <li className="fs-3 mb-2 p-4">
              <a href="#earth" onClick={closeToggle}>
                Earth
              </a>
            </li>
            <li className="fs-3 mb-2 p-4">
              <a href="#mars" onClick={closeToggle}>
                Mars
              </a>
            </li>
            <li className="fs-3 mb-2 p-4">
              <a href="#jupiter">Jupiter</a>
            </li>
            <li className="fs-3 mb-2 p-4">
              <a href="#saturn">Saturn</a>
            </li>
            <li className="fs-3 mb-2 p-4">
              <a href="#uranus">Uranus</a>
            </li>
            <li className="fs-3 mb-2 p-4">
              <a href="#neptune">Neptune</a>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default BarComp;
