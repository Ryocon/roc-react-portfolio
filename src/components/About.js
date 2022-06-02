import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./AboutStyles.css";
import heroImg from "../assets/images/rochimselfsmolroundedpng-min.png";

function About() {
  return (
    <Container>
      <Row className="rowstyle align-items-center">
        <Col className="about-box p-3 col-md-7 order-md-1">
          <p>
            Hi I'm Ryan - educator turned Full Stack Developer. I have a
            background in Art and Design, I like Star Wars, Cats and come with a
            passion for learning. Based in the Midlands (Warwickshire) but open
            to work worldwide!
            <br></br>
            <br></br>
            <span
              id="email-about"
              onClick={() => (window.location = "mailto:roconn25@gmail.com")}
            >
              Get in touch!
            </span>
          </p>
        </Col>
        <Col className="p-2 col-md-5 order-md-2">
          <Image src={heroImg} fluid roundedCircle className="img p-2"></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
