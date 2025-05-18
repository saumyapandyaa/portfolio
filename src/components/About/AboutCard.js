import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
          <p style={{ textAlign: "justify" }}>
            I bring a strong foundation in
            <b style={{color:"#3d1bc4", fontWeight:"500"}}> problem-solving, communication, teamwork, and multitasking</b>,
            supported by hands-on expertise in technologies including
            <b style={{color:"#3d1bc4",fontWeight:"500"}}>
              {" "}
              Python, C, C++, Java, JavaScript, Node.js, React.js, MySQL, PHP, Bash scripting, Perl scripting, TCP/IP networking, and Microsoft Office tools.
            </b>
          </p>

          <p style={{ textAlign: "justify", marginTop: "15px" }}>
            I am passionate about developing scalable solutions and continuously expanding my technical knowledge. My approach is shaped by modern software methodologies such as 
            <b style={{color:"#3d1bc4",fontWeight:"500"}}> Agile</b>, ensuring effective collaboration and delivery in fast-paced environments.
          </p>

          <p style={{ textAlign: "justify", marginTop: "15px" }}>
            I thrive on complex challenges and strive to build technologies that have real-world impact.
          </p>

          <p style={{ textAlign: "justify", marginTop: "15px" }}>
            Outside the tech world, I enjoy:
          </p>

          <ul>
            <span className="about-activity">
              <ImPointRight /> Playing soccer and volleyball
            </span><br></br>
            <span className="about-activity">
              <ImPointRight /> Reading and personal development
            </span><br></br>
            <span className="about-activity">
              <ImPointRight /> Traveling and exploring new cultures
            </span><br></br>
            <span className="about-activity">
              <ImPointRight /> Dancing
            </span><br></br>
            <span className="about-activity">
              <ImPointRight /> Networking and building communities
            </span><br></br>
          </ul>

          <p style={{ textAlign: "left", fontSize: "21.5px", marginTop: "20px" }}>
            I am currently seeking opportunities where I can apply my software engineering skills, work on impactful projects, and continue growing professionally and personally.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;


// old
// //import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// <b className="purple" ></b>

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//           <p>Throughout my professional journey, I have honed my soft skills such as problem-solving, communication, teamwork, and multitasking. Moreover, I have gained significant expertise in various technologies, including<b className="purple" > Python, C, C++, Java, CSS, MySQL, PHP, JavaScript, Node.js, React.js, Microsoft Office Applications, Bash, and Powershell. </b></p>
//           <p>My deep passion for technology has been a driving force behind my continuous learning and growth. I have actively familiarized myself with exceptional software management methodologies such as <b className="purple">Agile</b>, which have provided me with a strong foundation for efficient project execution.</p>
//          <p>Eager to tackle increasingly complex challenges, I am enthusiastic about contributing to the ever-evolving tech industry. By leveraging my skills and experiences, I aim to make meaningful contributions, striving to solve real-world problems and drive innovation in the field. Apart from coding, I also enjoy</p>
         
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing sports like soccer, volleyball
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Reading
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Dancing
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Socializing
//             </li>
//           </ul></p>
//           <p style={{textAlign:"left",fontSize:"21.5px"}}>I am  currently in search of a position that combines my software engineering skills with a challenge that offers  professional development, educational opportunities, and personal growth.</p></blockquote>
//           </Card.Body>
    
// </Card>  
     
//   );
// }

// export default AboutCard;
