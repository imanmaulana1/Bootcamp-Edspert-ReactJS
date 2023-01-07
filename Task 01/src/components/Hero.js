import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero min-vh-100 w-100 pt-5" id="home">
      <Container>
        <Row>
          <Col className="text-center pt-0 pt-sm-5 pt-lg-0">
            <h1 className="fs-1 custom-font">Assassin's</h1>
            <Container>
              <Row className="justify-content-center align-items-center" lg={6} md={5}>
                <Col>
                  <hr className="garis" />
                </Col>
                <Col>
                  <h2 className="fs-1 custom-font">Creed</h2>
                </Col>
                <Col>
                  <hr className="garis" />
                </Col>
              </Row>
            </Container>
            <p className="custom-text-danger fst-italic">Codename Red</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h1 className="fs-custom fs-1 mt-4 mt-sm-5 mt-lg-0 fw-light text-white">COMING SOON</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
