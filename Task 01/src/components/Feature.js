import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Trailer from "../assets/video/Trailer.mp4";

const Feature = () => {
  return (
    <>
      <div className="min-vh-100 custom-padding">
        <Container>
          <Row>
            <Col lg={6} className="col1">
              <h1 className="mb-3 my-4">
                Assassins Creed <span className="fs-4 custom-text-danger pt-2">CODENAME RED</span>
              </h1>
              <p className="fw-light lh-lg custom-fs text-secondary mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi numquam blanditiis tempore aliquam quae velit, sapiente eligendi, dolorum earum deleniti dolores, tenetur nostrum ipsam debitis cumque et laborum
                explicabo!
              </p>
              <Button className="btn custom-btn">Learn More</Button>
            </Col>
            <Col className="col2">
              <video className="w-100 pt-5 pt-sm-0" controls>
                <source src={Trailer} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </Container>

        <Container className="custom-padding-feature">
          <Row className="mb-5 mt-5">
            <Col>
              <h1 className="fw-bold text-center pt-5 mt-5" id="feature">
                Features
              </h1>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="text-center" sm={4}>
              <i className="fa-solid fa-globe fs-2 mb-4"></i>
              <h5 className="fw-bold">Open World</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
            <Col className="text-center" sm={4}>
              <i className="fa-solid fa-user-group fs-2 mb-4"></i>
              <h5 className="fw-bold">Multiplayer</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
            <Col className="text-center" sm={4}>
              <i className="fa-solid fa-gamepad fs-2 mb-4"></i>
              <h5 className="fw-bold">Multi-platform</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Feature;
