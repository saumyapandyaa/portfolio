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
        <p style={{fontSize:"12px"}}>( Linux )</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size="50px"/>
        <p style={{fontSize:"12px"}}>( Visual Code )</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm size="50px"/>
        <p style={{fontSize:"12px"}}>( PyCharm )</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub size="50px"/>
        <p style={{fontSize:"12px"}}>( GitHub )</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide size="50px"/>
        <p style={{fontSize:"12px"}}>( Eclipse )</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
