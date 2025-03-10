import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { skills } from "../../data/portfolio";
import "./TechStack.css";

const TechStack = () => {
  return (
    <Container id="tech-stack" className="techstack-container">
      <h2 className="section-title">{skills.title}</h2>
      
      {/* CORE and FRONT */}
      {skills.mySkills.slice(0, 2).map((category, index) => (
        <div key={index} className="tech-category">
          <h3 className="category-title">- {category.subject} -</h3>
          <Row className="tech-icons">
            {category.skills.map((skill, idx) => (
              <Col key={skill} xs={6} sm={4} md={3} lg={2} className="tech-col">
                <div className="tech-item">
                  <img
                    src={require(`../../asset/img/${skill}.svg`)}
                    alt={skill}
                    className="tech-icon"
                  />
                  <p className="tech-name">{skill}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      {/* SERVER and RDBMS */}
      <div className="tech-category">
        <h3 className="category-title">- SERVER & RDBMS -</h3>
        <Row className="tech-icons">
          {skills.mySkills.slice(2, 4).flatMap((category) =>
            category.skills.map((skill, idx) => (
              <Col key={skill} xs={6} sm={4} md={3} lg={2} className="tech-col">
                <div className="tech-item">
                  <img
                    src={require(`../../asset/img/${skill}.svg`)}
                    alt={skill}
                    className="tech-icon"
                  />
                  <p className="tech-name">{skill}</p>
                </div>
              </Col>
            ))
          )}
        </Row>
      </div>

      {/* IDE and OTHER */}
      <div className="tech-category">
        <h3 className="category-title">- IDE & OTHER -</h3>
        <Row className="tech-icons">
          {skills.mySkills.slice(4, 6).flatMap((category) =>
            category.skills.map((skill, idx) => (
              <Col key={skill} xs={6} sm={4} md={3} lg={2} className="tech-col">
                <div className="tech-item">
                  <img
                    src={require(`../../asset/img/${skill}.svg`)}
                    alt={skill}
                    className="tech-icon"
                  />
                  <p className="tech-name">{skill}</p>
                </div>
              </Col>
            ))
          )}
        </Row>
      </div>
    </Container>
  );
};

export default TechStack;
