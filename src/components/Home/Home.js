import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homeLogo.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Navbar from "../Navbar.js"
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
       <div
        // style={{
        //   // zIndex: "1000",
        //   // display: "block",
        //   // justifyContent: "center",  
        //   // alignItems: "center",    
        //   // height: "100%", 
        //   // background: "linear-gradient(150deg, #171493 10%, #090f3e 100%)",
        //   // paddingLeft: "100%", // Add some padding or other styles to the block if necessary
        //   // paddingRight:"100%",          
        // }}
      ></div>
        <div
    style={{
      background: "linear-gradient(150deg, #171493 10%, #090f3e 100%)",
      // paddingLeft: "100%", // Add some padding or other styles to the block if necessary
      // paddingRight:"100%",
    }}
  >
    <Navbar></Navbar>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" >
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading" style={{fontWeight: 500, letterSpacing: "0.5px", fontSize: "8px" }}>
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
    </section>
    
  );
}

export default Home;
