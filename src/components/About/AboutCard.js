import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              My past experiences have  allowed me strengthen my soft skills like problem-solving, communication, team-work, multi-tasking
                    etc. I have plenty of experience working with technology. Some examples are <b className="purple" >Python, C,
                    C++, Java, CSS, MySQL, PHP, JavaScript, Node.js, React.js, Microsoft Office Applications, Bash, Powershell.</b>
                    I am extremely passionate about technology. I have learnt about and worked using a really amazing software management approach like <b className="purple">Agile</b>. I cannot wait to solve more and more realistic problems
                    and contribute to the tech industry. Apart from coding, I also enjoy
         
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
          </ul></p><p style={{textAlign:"left",fontSize:"21.5px"}}>I am  currently in search of a position that combines my software engineering skills with a challenge that offers  professional development, educational opportunities, and personal growth.</p></blockquote>
          </Card.Body>
    
</Card>  
     
  );
}

export default AboutCard;
