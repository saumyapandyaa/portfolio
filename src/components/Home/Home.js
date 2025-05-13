import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          width: "50%",
          height: "50%",
          position: "relative ",
          right: "50",
          zIndex: 1000,
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{padding:0}}>
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 15, fontWeight: 500, letterSpacing: "0.5px", fontSize: "8px" }}>
                Welcome!
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
      </div>
      <Home2 />
      <div style={{ background: "linear-gradient(110deg, #07763d 0%, #abfed3 100%)" }}></div>

    </section>
    
  );
}

export default Home;
