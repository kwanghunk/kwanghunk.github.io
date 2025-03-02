import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CiMail } from "react-icons/ci";
import "./Navbar.css";
import PdfViewer from '../pdfViewer/PdfViewer';


const NavigationBar = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
    <Navbar className="custom-navbar" bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          kwanghunk
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-links">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#tech-stack">Tech Stack</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link onClick={() => setShowPdf(true)}>Portfolio(PDF)</Nav.Link>
          </Nav>
          <a href="mailto:hosookkh@gmail.com" className="navbar-mail">
            <CiMail size={30} className="mail-icon" />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <PdfViewer pdfFile={require("../../asset/pdf/portfolio.pdf")} show={showPdf} handleClose={() => setShowPdf(false)} />
  </>
  );
};

export default NavigationBar;