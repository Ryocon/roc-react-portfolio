import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import heroImg from "../assets/images/rochimselfsmol.png";

function About() {
  return (
    <Container>
      <Row>
        <Col>Test</Col>
        <Col><Image src={heroImg} fluid></Image></Col>
      </Row>
    </Container>
  );
}

export default About;
