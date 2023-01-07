import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Foto from "./Foto";
import Foto2 from "./Foto2";
import Foto3 from "./Foto3";

const Gallery = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="custom-gallery d-flex align-items-end">
            <div className="box mx-auto mb-5 py-5">
              <h1 className="text-center custom-font">The New Universe Upcoming </h1>
              <h1 className="text-center custom-text-danger fs-6">Travel to Feudal Japan</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5 pb-5">
        <Row className="m-5 pt-5 pb-3">
          <Col>
            <h1 className="fw-bold text-center" id="gallery">
              All Assassins Creed Games
            </h1>
          </Col>
        </Row>
        <Carousel>
          <Carousel.Item>
            <Foto />
          </Carousel.Item>
          <Carousel.Item>
            <Foto2 />
          </Carousel.Item>
          <Carousel.Item>
            <Foto3 />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Gallery;
