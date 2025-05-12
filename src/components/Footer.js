import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        

      <Col md={12} className="footer-body">
            <h3>FIND ME ON</h3>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saumyapandyaa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saumya-pandya-58435318b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <h3>ALWAYS HAPPY TO CONNECT AND COLLABORATE!</h3>
          </Col>
      </Row>
    </Container>
  );
}

export default Footer;
