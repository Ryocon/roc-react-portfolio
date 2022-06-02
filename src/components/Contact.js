import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3 mt-5">
          <Form.Label>Get in touch below!</Form.Label>
          <Form.Control type="name" placeholder="your name here" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="your@email.here" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="what can I help you with?"
          />
        </Form.Group>
        <Button href="#" className="btn-outline-dark" variant="light">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
