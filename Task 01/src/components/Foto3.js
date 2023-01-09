import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Gallery9 from "../assets/gallery/valhalla.jpg";
import Gallery10 from "../assets/gallery/revelations.jpg";
import Gallery11 from "../assets/gallery/syndicate.jpg";
import Gallery12 from "../assets/gallery/ezio.jpg";

const Foto3 = () => {
  return (
    <>
      <Container>
        <Row className="text-center flex-wrap">
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery9} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Valhalla</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-4">
                    <i className="fa-brands fa-xbox text-secondary fs-6"></i>
                    <i className="fa-brands fa-windows text-secondary fs-6"></i>
                    <i className="fa-brands fa-playstation text-secondary fs-6"></i>
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery10} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Revelations</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-4">
                    <i className="fa-brands fa-xbox text-secondary fs-6"></i>
                    <i className="fa-brands fa-windows text-secondary fs-6"></i>
                    <i className="fa-brands fa-playstation text-secondary fs-6"></i>
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery11} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed Syndicate</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-4">
                    <i className="fa-brands fa-xbox text-secondary fs-6"></i>
                    <i className="fa-brands fa-windows text-secondary fs-6"></i>
                    <i className="fa-brands fa-playstation text-secondary fs-6"></i>
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5" md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={Gallery12} />
              <Card.Body>
                <Card.Title className="fs-5 mb-5">Assassins Creed The Ezio</Card.Title>
                <Card.Title>
                  <div className="d-flex gap-4">
                    <i className="fa-brands fa-xbox text-secondary fs-6"></i>
                    <i className="fa-brands fa-windows text-secondary fs-6"></i>
                    <i className="fa-brands fa-playstation text-secondary fs-6"></i>
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

export default Foto3;
