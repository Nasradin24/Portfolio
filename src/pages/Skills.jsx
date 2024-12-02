import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "../css/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faCss3Alt,
  faHtml5,
  faReact,
  faGithub,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <Container
      className="all_about_skills py-5"
      style={{ paddingBottom: "20px" }}
    >
      <h2 className="text-center mb-4">Skills</h2>
      <p className="text-center mb-5">
        The skills, tools, and technologies I use and have junior-level
        proficiency in.
      </p>
      <Row className="tools">
        <Col xs={12} md={12}>
          <ul className="list-unstyled">
            <li className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <span className="name">
                  HTML / CSS / SCSS / Bootstrap / Tailwind
                </span>
                <span className="percent">95%</span>
              </div>
              <ProgressBar now={95} style={{ height: "8px" }} />
            </li>
            <li className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <span className="name">JavaScript / React JS</span>
                <span className="percent">70%</span>
              </div>
              <ProgressBar now={70} style={{ height: "8px" }} />
            </li>
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <span className="name">NodeJs / MongoDB / Express</span>
                <span className="percent">40%</span>
              </div>
              <ProgressBar now={40} style={{ height: "8px" }} />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
