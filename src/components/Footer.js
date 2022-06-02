import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegEnvelope, FaLinkedin, FaGithub, FaRebel } from "react-icons/fa";

function Footer() {
  return (
    <Container bg="light" className="mt-5 p-3">
      <Row className="p-2 justify-content-center">
        <Col className="col-auto text-center">
          <FaRebel onClick={() => window.open("https://stackoverflow.com/")} />
        </Col>
        <Col className="col-auto text-center">
          <FaGithub onClick={() => window.open("https://github.com/Ryocon")} />
        </Col>
        <Col className="col-auto text-center">
          <FaLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/rocdesigner-developer/")
            }
          />
        </Col>
        <Col className="col-auto text-center">
          <FaRegEnvelope
            onClick={() => (window.location = "mailto:roconn25@gmail.com")}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
