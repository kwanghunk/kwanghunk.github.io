import React from 'react';
import { Carousel, Container } from "react-bootstrap";
import { mainpage } from "../../data/portfolio";
import "./MainPage.css";
import profileImage from "../../asset/img/profile.jpg";
import { FaArrowDown } from "react-icons/fa";

const MainPage = () => {
  return (
    <Container fluid id="top" className="mainpage-container">
      {/* Carousel 슬라이드 */}
      <Carousel controls={true} indicators={true} interval={50000} className="mainpage-carousel" variant="dark">
        {/* 1번 슬라이드 - 자기소개 */}
        <Carousel.Item>
          <div className="slide-content">
            <h1>{mainpage.title}</h1>
            {mainpage.contents.map((content, index) => (
              <p key={index}>
                {content.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line.split(/(\*\*.*?\*\*)/g).map((part, subIdx) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <b key={subIdx}>{part.replace(/\*\*/g, "")}</b>
                      ) : (
                        part
                      )
                    )}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>
        </Carousel.Item>

        {/* 2번 슬라이드 - 사진 & 인적사항 */}
        <Carousel.Item>
          <div className="profile-slide">
            <div className="profile-left">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
            <div className="profile-right">
              <div className="info-grid">
                {mainpage.profileInfo.map((item, index) => (
                  <div className="info-item" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div className="name">{item.title}</div>
                    <div className="text">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* 아래 화살표표 */}
      <div className="arrow-down">
        <a href="#home"><FaArrowDown size={40} className="arrowicon" /></a>
        <p>READ MORE</p>
      </div>
    </Container>
  );
};
export default MainPage;