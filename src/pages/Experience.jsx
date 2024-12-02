import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Experience.css";

const Experience = () => {
  return (
    <Container className='experience' style={{fontSize: "32px", maxWidth: "100%", padding: "100px", }}>
      <h2 style={{ fontSize: "32px", margin: "40px", padding: "30px" }}>Experience</h2>
      <Row style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "left" }}>
        <Col xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", tcextAlign: "left", paddingLeft: "10px" }}>
          <h3>My Experience</h3>
          <h5>Junior Frontend Developer</h5>
          <h5>2024 | Agile Solutions</h5>
        </Col>

        <Col xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left" }}>
          <h3>My Education</h3>
          <h5>University</h5>
          <h5>2017-2021 | Baku</h5>
          <h5 style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
            Mechanical Engineering - Azerbaijan Technical University
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
