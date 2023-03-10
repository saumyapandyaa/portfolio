import {React, useEffect} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  useEffect(()=> {
    console.log("Description: ", typeof(props.description));
    console.log("Description: ", props.description);
  }, [])
  return (
    <Card className="project-card-view" style={{Align: "center" }} >
      <Card.Img  className="crd-img" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{wordSpacing:"55%", fontFamily:"monospace"}}><u><strong>{props.title}</strong></u></Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description.map(element => {
           return (
            
              <p style={{wordSpacing: "55%",fontFamily:"sans-serif"}}>{element}</p>
            )
          })}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
