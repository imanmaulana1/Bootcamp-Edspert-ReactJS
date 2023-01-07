import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Gallery1 from "../assets/gallery/blackflag.jpg";
import Gallery2 from "../assets/gallery/brotherhood.jpg";
import Gallery3 from "../assets/gallery/chronicles.jpg";
import Gallery4 from "../assets/gallery/mirage.jpg";

const Foto = () => {
  return (
    <>
      <Container>
        <Row className="text-center flex-wrap">
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery1} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Black Flag</Card.Title>
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
              <Card.Img variant="top" src={Gallery2} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Brotherhood</Card.Title>
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
              <Card.Img variant="top" src={Gallery3} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Chronicles</Card.Title>
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
              <Card.Img variant="top" src={Gallery4} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Mirage</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-2">
                    <i className="fa-brands fa-windows text-secondary"></i>
                    <i className="fa-brands fa-playstation text-secondary"></i>
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

export default Foto;
