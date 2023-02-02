import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterList = (props) => {
  return (
    <Col>
      <p className="fw-bold">{props.title}</p>
      <div className="custom-box-program">
        <Link to={"#"}>{props.listSatu}</Link>
        <Link to={"#"}>{props.listDua}</Link>
        <Link to={"#"}>{props.listTiga}</Link>
        <Link to={"#"}>{props.listEmpat}</Link>
      </div>
    </Col>
  );
};

export default FooterList;
