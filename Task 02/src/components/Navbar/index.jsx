import React from "react";
import { Container } from "react-bootstrap";
import BarComp from "./BarComp";

const index = () => {
  return (
    <>
      <nav className="fixed-top">
        <Container fluid>
          <BarComp />
        </Container>
      </nav>
    </>
  );
};

export default index;
