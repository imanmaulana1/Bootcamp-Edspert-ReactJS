import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Gallery5 from "../assets/gallery/odyssey.jpg";
import Gallery6 from "../assets/gallery/origins.jpg";
import Gallery7 from "../assets/gallery/rogue.jpg";
import Gallery8 from "../assets/gallery/unity.jpg";

const Foto2 = () => {
  return (
    <>
      <Container>
        <Row className="text-center flex-wrap">
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery5} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Odyssey</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-2">
                    <i className="fa-brands fa-xbox text-secondary"></i>
                    <i className="fa-brands fa-playstation text-secondary"></i>
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery6} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Origins</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-2">
                    <i className="fa-brands fa-xbox text-secondary"></i>
                    <i className="fa-brands fa-windows text-secondary"></i>
                    <i className="fa-brands fa-playstation text-secondary"></i>
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery7} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Rogue</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-2">
                    <i className="fa-brands fa-xbox text-secondary"></i>
                    <i className="fa-brands fa-windows text-secondary"></i>
                    <i className="fa-brands fa-playstation text-secondary"></i>
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery8} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Unity</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-2">
                    <i className="fa-brands fa-xbox text-secondary"></i>
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Foto2;
