import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h1 className="text-white fs-5 text-center">Copyright &#169; Iman Maulana</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
