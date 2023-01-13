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
            <p className="home-about-body" >
              My name is Saumya Pandya. I am a second year Software Engineering student at Ontario Tech University. I can be described as an adaptive,
                                ambitious, quick-learner, passionate individual with a strong grasp of my <b className="purple"> extraordinary
                                soft
                                and technical skills.</b>
                                <ul>
                                  <b className="purple" ><u>Technical Skills:</u></b>
                                  <li><b className="purple">Languages: </b>
C, C++, Python, PHP, HTML, CSS, Java Lua, MySQL, JavaScript, VHDL and scripting in Bash </li>
<li><b className="purple">Tools: </b>VS Code,
GitHub, Powershell, React.js, Node.js, Capstone, Pygame, Latex, 
Solidworks, Maple, Matplotlib, Microsoft Office(Word, Excel, Outlook, Power Point),  Xilix ISE, Labview</li>
                                <li><b className="purple">Some concepts:</b>Object Oriented Programming, Complexity, Testing/Debugging, Recursion, Stacks, Queues(and Heap), Linked Lists, Trees, Hashing, Graphs</li><li><b className="purple">Relevant Coursework:</b> Web programming, Object Oriented Programming, Software Project 
Management, Digital Systems, Data Structures
</li></ul>
            </p>
            <p style={{textAlign: "left",fontSize: "1.2em"}} className="home-about-body">
            <b className="purple"> Awards: </b>
              <ul>
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
