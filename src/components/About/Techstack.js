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
import { BsMicrosoft } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";  // For Networking

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs size="55px" />
        <p style={{ fontSize: "12px" }}>( Node.js )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact size="55px" />
        <p style={{ fontSize: "12px" }}>( React.js )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython size="55px" />
        <p style={{ fontSize: "12px" }}>( Python )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava size="55px" />
        <p style={{ fontSize: "12px" }}>( Java )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus size="55px" />
        <p style={{ fontSize: "12px" }}>( C++ )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size="50px" />
        <p style={{ fontSize: "12px" }}>( JavaScript )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhp size="55px" />
        <p style={{ fontSize: "12px" }}>( PHP )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql size="55px" />
        <p style={{ fontSize: "12px" }}>( MySQL )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <BsMicrosoft size="50px" />
        <p style={{ fontSize: "12px" }}>( Microsoft Office Suite )</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired size="50px" />
        <p style={{ fontSize: "12px" }}>( TCP/IP Networking )</p>
      </Col>

    </Row>
  );
}

export default Techstack;


// // old
// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiPython,
//   DiMysql,
//   DiPhp,
//   DiJava,
// } from "react-icons/di";
// import {
//   BsMicrosoft,
// } from "react-icons/bs";

// function Techstack() {

//   return (
    

//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs size="55px"/>
//         <p style={{fontSize:"12px"}}>( Node js )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact size="55px"/>
//         <p style={{fontSize:"12px"}}>( React )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython size="55px"/>
//         <p style={{fontSize:"12px"}}>( Python )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava size="55px"/>
//         <p style={{fontSize:"12px"}}>( Java )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus size="55px"/>
//         <p style={{fontSize:"12px"}}>( C++ )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 size="50px"/>
//         <p style={{fontSize:"12px"}}>( JavaScript )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPhp size="55px" />
//         <p style={{fontSize:"12px"}}>( PHP )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMysql size="55px"/>
//         <p style={{fontSize:"12px"}}>( MySQL )</p>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <BsMicrosoft size="50px"/>
//         <p style={{fontSize:"12px"}}>( Microsoft )</p>
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;
