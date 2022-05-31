import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./AboutStyles.css"
import heroImg from "../assets/images/rochimselfsmolroundedpng-min.png";

function About() {
  return (
    <Container>
      <Row className="rowstyle align-items-center">
        <Col className="p-3 col-md-7 order-md-1">
          Hi I'm Ryan. I am an experienced educator who is bringing my many
          transferrable skills from a successful career into the world of Full
          Stack Development. I have a background in Art and Design, an
          everstanding love of technology and a passion for learning and
          applying new things into my work. Based in the Midlands (Warwickshire)
          but open to work worldwide!
        </Col>
        <Col className="p-2 col-md-5 order-md-2">
          <Image src={heroImg} fluid className="img p-2"></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
