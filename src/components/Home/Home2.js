import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/badge.jpg";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
    <div
    style={{
      overflowY: "auto",
      zIndex:"2",
      
    }}>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME!<span className="purple"></span>
            </h1>
            <p style={{ textAlign: "left", fontSize: "1.2em" }} className="home-about-body">
              I'm currently a <b className="purple">Cloud Associate Intern at AWS</b>, passionate about building scalable cloud-native applications, systems, and infrastructure.
              <br />
              <br />
              Previously, I worked at <b className="purple">IBM</b> as a Software Developer Intern, where I developed strong expertise in <b className="purple">cloud technologies, containerization (AWS EKS), security engineering</b>, and more.
              <br />
              <br />
              My areas of expertise include:
              <ul>
                <li><b className="purple">Cloud Computing & DevOps:</b> AWS, Docker, Kubernetes, Cloud-native application development</li>
                <li><b className="purple">Software Development:</b> Full-stack development, Microservices, Security & Cryptography</li>
                <li><b className="purple">Security Engineering:</b> SSL/TLS, Cryptography, Identity & Access Management (IAM)</li>
              </ul>
              <br />
              Outside of tech, I am passionate about contributing to open-source projects, exploring AI innovations, and promoting inclusivity in technology. I enjoy solving complex challenges and building impactful solutions that create value for users.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        </div>
      </Container>
      
  );
}

export default Home2;
