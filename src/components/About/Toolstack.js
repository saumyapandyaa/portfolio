import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPycharm,
  SiEclipseide,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { VscTerminal, VscFileCode } from "react-icons/vsc"; // Bash & Perl icons

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux size="55px" />
        <p style={{ fontSize: "12px" }}>( Linux )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size="50px" />
        <p style={{ fontSize: "12px" }}>( Visual Studio Code )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm size="50px" />
        <p style={{ fontSize: "12px" }}>( PyCharm )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub size="50px" />
        <p style={{ fontSize: "12px" }}>( GitHub )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide size="50px" />
        <p style={{ fontSize: "12px" }}>( Eclipse IDE )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <VscTerminal size="55px" />
        <p style={{ fontSize: "12px" }}>( Bash Scripting )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <VscFileCode size="55px" />
        <p style={{ fontSize: "12px" }}>( Perl Scripting )</p>
      </Col>

    </Row>
  );
}

export default Toolstack;

// // old
// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiLinux,
//   SiVisualstudiocode,
//   SiPycharm,
//   SiEclipseide,
// } from "react-icons/si";
// import{AiFillGithub,}from "react-icons/ai";
// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiLinux size="55px"/>
//         <p style={{fontSize:"12px"}}>( Linux )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode size="50px"/>
//         <p style={{fontSize:"12px"}}>( Visual Code )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPycharm size="50px"/>
//         <p style={{fontSize:"12px"}}>( PyCharm )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <AiFillGithub size="50px"/>
//         <p style={{fontSize:"12px"}}>( GitHub )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiEclipseide size="50px"/>
//         <p style={{fontSize:"12px"}}>( Eclipse )</p>
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
