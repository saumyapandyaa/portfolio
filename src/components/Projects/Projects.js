import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/tree.png";
import edge from "../../Assets/Projects/edge.png";
import editor from "../../Assets/Projects/turtle.jfif";
import s from "../../Assets/Projects/social.png";
import peer from "../../Assets/Projects/peer.jfif";
import mentor from "../../Assets/Projects/mentor.jfif";
import teach from "../../Assets/Projects/teach.jfif";
import bitsOfCode from "../../Assets/Projects/sports.jfif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="purple">Experience </strong>
        </h1>
        <br></br><br></br>
        <h3 style={{ color: "white" }}>
          Projects
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s}
              isBlog={false}
              title="Graffit social media"
              description=" Tools: C, Graphs Data-Structure. Built the back end of a complex social media.
              Used Directed and Non-Directed graph algorithms to create the backend
              Added features where a user could add friends, remove friends, check mutual friends, follow brands/celebrities etc."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sports Events Management Website"
              description="Tools: HTML, CSS, Javascript, PHP, MySQL. Created an interactive, user-friendly website using HTML, CSS, JavaScript, MySQL, PHP.
              Lets users register/login to the web app and sign up for events. It
              also gives users an option to view all their active registrations along with their details."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MS Logo Turtle on C             "
              description="Tools: C, Linked List Data-Structure. Coded Turtle(language) on C so that the “turtle” would follow the instructions given, pixel by pixel, to create images using linked lists.
              Created pictures like baby Yoda and acquired strong problem-solving, debugging, and analytical skills. The
              turtle could take single as well as multiple instructions at once."             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Quad"
              description="Tools: C, Trees Data-Structure. Convert pixelated pictures into clear ones. Took pixelated image as input.
              Used tree-algorithms like insertion, sorting- preorder traversal, postorder traversal, inorder traversal and searching to finally
              output a clear image. "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edge}
              isBlog={false}
              title="Edge detection"
              description="Tools: C. Find the regions of an image that have a sharp change in colour or intensity."
            />
          </Col>
        </Row>
        <br></br><br></br>
        <h3 style={{ color: "white" }}>
          Work Experience
        </h3>
        <Row>
        <Col  md={6} className="project-card">
            <ProjectCard
              imgPath={teach}
              isBlog={false}
              title="Programming Instructor- LOGIC FUSION | Markham, ON | July 2022 - Current"
              description="Tools: Python, C++, Java, Game-Maker, WeDo robotics, Scratch, Lego robotics. Taught and/or had a class of students make games/projects using languages like Java, Python, C++ and/or softwares like Gamemaker, Android Appwizard, Lego robotics.
              Built Robotic Legos and made students make their own to add excitement to their learning process.
              Planned and organized coursework for students of different levels and communicated with students and parents. Ensured students learnt what was being taught to them showcasing my strong leadership skills and enthusiastic nature."
            />
          </Col>
          <Col  md={6} className="project-card">
            <ProjectCard
              imgPath={peer}
              isBlog={false}
              title="Peer Employment Advisor- ONTARIO TECH UNIVERSITY CAREER CENTER | Oshawa, ON | September 2021- Current"
              description="Helped students of all types and backgrounds build a solid resume, cover-letter and enhanced their LinkedIn profiles to make their job applications stronger using incredible communication, leadership, and independent thinking skills.
              Created front end of the user-interface of a website that scans a resume and the key requirements of a particular job and matches them.
              Organized workshops and fairs, gave presentations in front of a large variety of people and acquired solid leadership, teamwork and organization skills."
            />
          </Col>
          <Col  md={6}  className="project-card">
            <ProjectCard
              imgPath={teach}
              isBlog={false}
              title="Programming Coach- CODE-IT HACKS | Toronto, ON | June 2021 - August 2021"
              description="Tools: Python, C, Roblox, Minecraft, Lua, Scratch, PyCharm, Pygame, WeDo robotics. Connected and communicated with youngsters and helped them code different levels of games on different coding platforms like Minecraft, Roblox, PyCharm, Pygame and Scratch and personally gained a greater knowledge about those platforms.
              Built mini robots in in-person camps which students used to compete among themselves.
              Taught about 15-20 young kids (per class) programming languages like Python and Lua."
            />
          </Col>
        </Row>
        <br></br><br></br>
        <h3 style={{ color: "white" }}>
          Volunteering Experience
        </h3>
        <Row>
        <Col md={6}  className="project-card">
            <ProjectCard
              imgPath={mentor}
              isBlog={false}
              title="Youth Mentor- Newcomer Youth Leadership and Development Program, YMCA | Toronto, ON | September 2018 – December 2019"
              description="Achieved mentorship standing for ability to motivate and facilitate community-based youth programs which helped me develop extraordinary leadership skills. 
              Promoted (mental)health awareness and encouraged youth to be caring, respectful, honest, active, fair and and make others feel inclusive while also providing safe space.
              Organized campaigns that taught how to relieve stress and live a stress-free life.
              Provided creative ideas, suggestions, and opinions to the youth advisor on recreational activities and improvement of program during mentor meetings using strong interpersonal and communication skills."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
