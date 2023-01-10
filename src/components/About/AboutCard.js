import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             I am a second year Software Engineering student at Ontario Tech University. My past experiences have
                    allowed me strengthen my soft skills like problem-solving, communication, team-work, multi-tasking
                    etc.
                    I have plenty of experience working with technology. Some examples are Python, C,
                    C++, Java, HTML, CSS, MySQL, PHP, JavaScript, SolidWorks, Multisim, Pygame, React, Node js, Microsoft Office Applications.
                    I am extremely passionate about technology. I cannot wait to solve more and more realistic problems
                    and contribute to the tech industry. Apart from coding, I also enjoy
          </p>
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
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;