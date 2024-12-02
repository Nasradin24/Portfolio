import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage.jsx";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper, faLocationDot, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import myimg from "./assets/images/image.jpeg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appClass = darkMode ? "dark-mode" : "";

  return (
    <div className={appClass}>
      <Navbar
        expand="lg"
        className="navbar-section"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <Container>
          <Navbar.Brand className="navbar-brand" style={{ cursor: "pointer" }}>
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <li>
                <Nav.Link href="#about">About</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#skills">Skills</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#experience">Experience</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </li>
              <li>
                <Nav.Link onClick={handleToggleDarkMode} style={{ cursor: "pointer" }}>
                  {darkMode ? (
                    <FontAwesomeIcon icon={faSun} />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} />
                  )}
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        id="header"
        className="header_main py-5"
        style={{ maxWidth: "100%", display: "flex", flexDirection: "column" }}
      >
        <Container>
          <Row style={{ maxWidth: "1280px" }}>
            <Col xs={12} md={6} className="left-line">
              <h2>
                Hi, I'm Guseinovi Nasradin{" "}
                <FontAwesomeIcon icon={faHandPaper} />
              </h2>
              <p>I'm a junior-level Frontend Developer | React & Node.js</p>
              <div className="location">
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Baku, Azerbaijan</span>
              </div>
              <div className="social mt-3">
                <a
                  href="https://github.com/Nasradin24?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ fontSize: "24px", marginRight: "10px" }}
                  />
                  Github
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      color: "#db4437",
                    }}
                  />
                  Gmail
                </a>
                <a
                  href="https://www.linkedin.com/in/nasradin-guseinovi-1a3639323/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ fontSize: "24px", marginRight: "10px" }}
                  />
                  Linkedin
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} className="right-line">
              <img src={myimg} alt="Nasradin's Profile" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="about">
        <AboutPage />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <ContactPage />
      </div>

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Skills />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
