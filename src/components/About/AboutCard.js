import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

<b className="purple" ></b>

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <p>Throughout my professional journey, I have honed my soft skills such as problem-solving, communication, teamwork, and multitasking. Moreover, I have gained significant expertise in various technologies, including<b className="purple" > Python, C, C++, Java, CSS, MySQL, PHP, JavaScript, Node.js, React.js, Microsoft Office Applications, Bash, and Powershell. </b></p>
          <p>My deep passion for technology has been a driving force behind my continuous learning and growth. I have actively familiarized myself with exceptional software management methodologies such as <b className="purple">Agile</b>, which have provided me with a strong foundation for efficient project execution.</p>
         <p>Eager to tackle increasingly complex challenges, I am enthusiastic about contributing to the ever-evolving tech industry. By leveraging my skills and experiences, I aim to make meaningful contributions, striving to solve real-world problems and drive innovation in the field. Apart from coding, I also enjoy</p>
         
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports like soccer, volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Socializing
            </li>
          </ul></p>
          <p style={{textAlign:"left",fontSize:"21.5px"}}>I am  currently in search of a position that combines my software engineering skills with a challenge that offers  professional development, educational opportunities, and personal growth.</p></blockquote>
          </Card.Body>
    
</Card>  
     
  );
}

export default AboutCard;
