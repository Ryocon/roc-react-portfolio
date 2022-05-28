import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


function MenuBar({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="About">Hello!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="About"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              href="Projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="CV"
              onClick={() => handlePageChange("CV")}
              className={
                currentPage === "CV" ? "nav-link active" : "nav-link"
              }
            >
              CV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;
