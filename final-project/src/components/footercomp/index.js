import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import FooterList from "./FooterList";

const FooterComp = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <h1 className="fs-6 text-secondary">Belajar bersama Edspert</h1>
              <p className="custom-font text-secondary">Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
            </Col>
            <Col>
              <Row>
                <FooterList title="Program" listSatu="Online Course" listDua="Mini Bootcamp" listTiga="Bootcamp" />
                <FooterList title="Bidang Ilmu" listSatu="Digital Marketing" listDua="Product Management" listTiga="English" listEmpat="Programming" />
                <FooterList title="Tentang Edspert" listSatu="Bantuan" listDua="Kontak Kami" listTiga="Media Sosial" />
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};



export default FooterComp;
