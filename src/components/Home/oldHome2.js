import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>        
        <Row>
          <Col md={8} className="home-about-description">
            <br></br><br></br>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p style={{textAlign: "left",fontSize: "1.2em"}} className="home-about-body" >
              My name is Saumya Pandya. I am a third year<b className="purple"> Software Engineering student</b> at Ontario Tech University. 
              I am a passionate software engineering student with a strong foundation in data structures, object-oriented programming, and web development, demonstrated through various projects. My experience as a Software Developer Intern at IBM has honed my skills in security, cloud technologies, and container optimization, where I tackled complex problems and delivered robust solutions. With proven leadership and communication abilities, I excel in motivating teams and collaborating effectively in diverse environments. I am highly organized, innovative, and always eager to learn, ready to tackle challenges and contribute to impactful projects.<br></br><br></br>
                                <ul>
                                  <b className="purple" ><u>Technical Skills:</u></b>
                                  <li><b className="purple">Languages: </b>Java, C, C++, Python, PHP, CSS, MySQL, JavaScript </li>
                                  <li><b className="purple">Security & Cryptography: </b>HTTP/HTTPS connections, AES/DES encryption, Hostname verification, SSL handshake, FIPS Cryptography, Bouncy Castle Cryptography</li>
                                  <li><b className="purple">Microservices & Frameworks: </b>MicroProfile, Java Microservices, JAX-RS Annotations</li>
                                  <li><b className="purple">Cloud & DevOps: </b>Amazon Web Services (EKS), Docker, Podman, Kubernetes, Maven, Ant</li>
                                  <li><b className="purple">Development Tools & Environments: </b>Eclipse, VSCode, Rancher Desktop, Bash Shell, Vim, Cygwin</li>
                                  <li><b className="purple">Identity & Access Management: </b>LTPA, LDAP</li>
                                  <li><b className="purple">Operating Systems: </b>Windows, Linux (Ubuntu, RedHat), Mac </li>
                                  <li><b className="purple">Additional Technology: </b>GitHub, Sandbox Environments</li>
                                 <li><b className="purple">Some concepts and/or methodologies:</b> Scrum, Agile, Object Oriented Programming, Complexity, Testing/Debugging, Recursion, Stacks, Queues(and Heap), Linked Lists, Trees, Hashing, Graphs</li><li><b className="purple">Relevant Coursework(completed):</b> Web programming, Object Oriented Programming, Software Project 
Management, Digital Systems, Data Structures</li><br></br><li><b className="purple">Relevant Coursework(to be completed by the end of 3rd year):</b>Microprocessors and Computer Architecture, Systems Programming, Software Design and Architectures, Data Management, Design and Analysis of Algorithms, Introduction to Artificial Intelligence, Computer Networks, Operating Systems, Software Quality </li><br></br>
            <b className="purple"><u> Awards: </u></b>
                <li>President's List Honours (2022-2023)</li>
                <li>Dean's List Honours (2021-2022)</li>
                </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/*<Row>
           <Col md={12} className="home-about-social">
            <h3>FIND <span className="purple">ME</span> ON</h3>
            
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
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/saumyapandya_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col> 
        </Row>*/}
      </Container>
    </Container>
  );
}
export default Home2;
