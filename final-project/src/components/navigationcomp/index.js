import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./NavigationComp.module.css";

const NavigationComp = () => {
  return (
    <>
      <Navbar className={styles.customnav} expand="lg">
        <Container>
          <Navbar.Brand href="/" className="text-white py-3">
           <h1 className="fs-4">Edspert</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white me-4">
                Program
              </Nav.Link>
              <Nav.Link href="#link" className="text-white me-4">
                Bidang Ilmu
              </Nav.Link>
              <Nav.Link href="#link" className="text-white me-4">
                Tentang Edspert
              </Nav.Link>
              <Button variant="danger" className="rounded-pill">
                Masuk/Daftar
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationComp;
