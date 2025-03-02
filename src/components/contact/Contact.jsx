import React from "react";
import { contact } from "../../data/portfolio";
import { Col, Container, Row } from "react-bootstrap";
import { RiKakaoTalkFill, RiGithubFill, RiYoutubeFill } from "react-icons/ri";
import "./Contact.css";

const Contact = () => {

  return (
    <Container fluid id="contact" className="contact-container">
      <Row>
        <Col className="text-center">
          <h2 className="contact-title">{contact.title}</h2>
        </Col>  
      </Row>
      <Row>
        <Col className="text-center">
          <p className="contact-content">{contact.content}</p>
        </Col>
      </Row>
      <Row className="contact-icons">
      <Col className="text-center" md="auto">
          <a href={contact.kakao} target="_blank" rel="noopener noreferrer" className="contact-icon">
            <RiKakaoTalkFill className="icon" />
          </a>
        </Col>
        <Col className="text-center" md="auto">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-icon">
            <RiGithubFill className="icon" />
          </a>
        </Col>
        <Col className="text-center" md="auto">
          <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="contact-icon">
            <RiYoutubeFill className="icon" />
          </a>
        </Col>
      </Row>         
    </Container>
  )
}
export default Contact;