import React from "react";

import "./CVStyles.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiHandlebarsdotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiGraphql,
  SiBulma,
} from "react-icons/si";

function CV() {
  return (
    <Container>
      <Row className="cvrowstyle p-1">
        <Col>
          <h3 className="frontend">Front End Tech</h3>
          <ul>
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <SiJavascript /> JavaScript
            </li>
            <li>
              <FaReact /> React
            </li>
            <li>
              <SiHandlebarsdotjs /> Handlebars
            </li>
            <li>
              <FaBootstrap /> Bootstrap
            </li>
            <li>
              <SiTailwindcss /> Tailwind
            </li>
            <li>
              <SiBulma /> Bulma
            </li>
          </ul>
        </Col>

        <Col>
          <h3 className="backend">Back End Tech</h3>
          <ul>
            <li>
              <FaNodeJs /> Node.js
            </li>
            <li>
              <SiMongodb /> MongoDB
            </li>
            <li>
              <SiMysql /> MySQL
            </li>
            <li>
              <SiExpress /> Express.js
            </li>
            <li>
              <SiGraphql /> GraphQL
            </li>
          </ul>
        </Col>

        <Col>
          <h3 className="cvdownload">CV Download</h3>
          <Button
            href="https://drive.google.com/file/d/1pETLI4SS3fJGREAvg2RuzSkGzTzBr8-p/view"
            target="_blank"
            className="btn-outline-dark"
            variant="light"
          >
            Downloadable PDF
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CV;
