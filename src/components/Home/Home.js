import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/homeLogo.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div
        style={{
          width: "20px",
          height: "20px",
          overflow: "hidden",
          margin:0,
          padding:0,
          position: "relative",
        }}
      ></div>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 15 }}>
                Welcome!{" "}
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Saumya Pandya</strong>
              </h1>

              <div style={{ paddingTop: 30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
