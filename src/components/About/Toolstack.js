import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPycharm,
  SiEclipseide,
} from "react-icons/si";
import{AiFillGithub,}from "react-icons/ai";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux size="55px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size="50px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm size="50px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub size="50px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide size="50px"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
