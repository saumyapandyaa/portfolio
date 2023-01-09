import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiMysql,
  DiPhp,
  DiJava,
} from "react-icons/di";
import {
  BsMicrosoft,
} from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs size="55px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size="55px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size="55px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava size="55px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus size="55px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size="50px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp size="55px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql size="55px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsMicrosoft size="50px"/>
      </Col>
    </Row>
  );
}

export default Techstack;
