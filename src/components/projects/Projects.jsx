import React, { useState } from "react";
import { projects } from "../../data/portfolio";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io5";
import "./Projects.css";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container className="projects-container">
      <h2 className="section-title">Projects</h2>
      <Row className="card-container">
        {projects.personalProjects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={require(`../../asset/img/${project.src}`)} alt={project.title} className="project-image" onClick={() => handleShow()} />
              <Card.Body>
                <Card.Title className="project-title">{project.title}</Card.Title>
                <Card.Text className="project-short">{project.short}</Card.Text>
                <Card.Text className="project-description">{project.description}</Card.Text>
                {project.techDetail.map((td, idx) => (
                  <Card.Text key={idx} className="project-tech-detail">{td}</Card.Text>
                ))}
                <div className="project-technologies">
                  {project.technologies.map((badge, idx) => (
                    <img key={idx} src={badge} alt="tech-badge" className="tech-badge" />
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="nooperner noreferrer" className="project-icon">
                    <IoLogoGithub size={30} />
                  </a>
                  <a href={project.demo} target="_blank" rel="nooperner noreferrer" className="project-icon">
                    <IoLogoYoutube size={30} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal - GitHub Repository 표시 */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Project Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            project content
        </Modal.Body>
      </Modal>

    </Container>
  )
}

export default Projects;