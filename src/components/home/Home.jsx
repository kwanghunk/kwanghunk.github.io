import React from "react";
import { Container, Card } from "react-bootstrap";
import { home } from "../../data/portfolio";
import { IoLogoGithub, IoCall, IoMail } from "react-icons/io5";
import "./Home.css";

const Home = () => {
  return (
    <Container id="home" className="home-container">
      <h2 className="section-title">보유역량 요약</h2>
      <div className="ability-container">
        {home.possessionAbility.map((ability, index) => (
          <div key={index}>
            <Card className="ability-card">
              <Card.Body>
                <Card.Title className="ability-title">{ability.title}</Card.Title>
                <ul className="ability-list">
                  {ability.description.map((desc, idx) => (
                    <li key={idx} className="ability-item">
                      {desc}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="contact-info">
        <a href={home.github} target="_blank" rel="nooperner noreferrer" className="contact-link">
          <IoLogoGithub size={40} />
        </a>
        <a href={`mailto:${home.email}`} className="contact-link">
          <IoMail size={40} />
        </a>
        <a href={`tel:${home.call}`} className="contact-link">
          <IoCall size={40} />
        </a>
      </div>
    </Container>
  )
}

export default Home;