import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../css/AboutPage.css";
import image from "../assets/images/picture.jpg";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="all-about-section" style={{ maxWidth: "100%" }}>
      <h2 className="text-center my-4">{t("About Me")}</h2>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <img
            src={image}
            alt={t("Profile Picture")}
            className="img-fluid shadow"
            style={{ maxWidth: "250px" }}
          />
        </Col>
        <Col xs={12} md={6}>
          <p style={{ textAlign: "left", maxWidth: "600px" }}>
            {t(
              "Welcome! I’m a passionate Frontend Developer with a year of experience bringing ideas to life through dynamic and user-friendly applications. I specialize in creating seamless experiences and visually appealing designs. Constantly learning and evolving, I am dedicated to delivering innovative solutions and staying at the forefront of modern development practices."
            )}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;