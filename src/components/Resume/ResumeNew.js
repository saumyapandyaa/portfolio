// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://github.com/saumyapandyaa/portfolio/src/Assets/resume.pdf";

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         {/* <Row style={{ justifyContent: "center", position: "relative" }}> */}
//           <Button style={{ justifyContent: "center", position: "relative" ,maxWidth: "350px", maxHeight:"450px" }} classname="btn"
//             variant="primary"
//             href={pdf}
//             target="_blank"
//           >
//             <AiOutlineDownload />
//             &nbsp;Download resume
//           </Button>
//         {/* </Row> */}

//         {/* <Row className="resume">
//           <Document file={resumeLink}  className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
         
//         </Row>
//         <Row className="resume">
//           <Document file={resumeLink}   className="d-flex justify-content-center">
//             <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
         
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button  classname="btn"
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "150px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download resume
//           </Button>
//         </Row> */}
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;
