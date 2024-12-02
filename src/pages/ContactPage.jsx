import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "../css/ContactPage.css";

const ContactPage = () => {
  return (
    <Container className="contact-page" style={{ padding: "4rem 2rem" }}>
      <h2 className="contact-title" style={{paddingBottom: "40px" , fontSize: "3.5rem"}}>Contact Me</h2>
      <h3 className="contact-subtitle" style={{paddingBottom: "40px" , fontSize: "2.2rem"}}>Get in Touch</h3>
      <div className="contact-details">
        <Row>
          <Col xs={12} md={4} className="contact-item">
            <h3>Number</h3>
            <div className="contact-info">
              <FontAwesomeIcon className="icon phone-icon" icon={faPhone} />
              <span>+994 55 936 17 30</span>
            </div>
          </Col>
          <Col xs={12} md={4} className="contact-item">
            <h3>Gmail</h3>
            <div className="contact-info">
              <FontAwesomeIcon className="icon email-icon" icon={faEnvelope} />
              <span>nesreddin19@email.com</span>
            </div>
          </Col>
          <Col xs={12} md={4} className="contact-item">
            <h3>Location</h3>
            <div className="contact-info">
              <FontAwesomeIcon className="icon location-icon" icon={faMapMarkerAlt} />
              <span>Azerbaijan - Baku City</span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ContactPage;