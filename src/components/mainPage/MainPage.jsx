import React from 'react';
import { Carousel, Container } from "react-bootstrap";
import { mainpage } from "../../data/portfolio";
import "./MainPage.css";
import profileImage from "../../asset/img/profile.jpg";
import { IoPerson, IoCalendarClear, IoSchool, IoCall, IoMail } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";

const MainPage = () => {
  return (
    <Container fluid className="mainpage-container">
      {/* Carousel 슬라이드 */}
      <Carousel controls={true} indicators={true} interval={50000} className="mainpage-carousel" variant="dark">
        {/* 1번 슬라이드 - 자기소개 */}
        <Carousel.Item>
          <div className="slide-content">
            <h1>{mainpage.title}</h1>
            {mainpage.contents.map((content, index) => (
              <p key={index}>{content}</p>
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
                <div className="info-item">
                  <IoPerson className="icon" />
                  <div className="name"><strong>{mainpage.name[0]}</strong></div>
                  <div className="text">{mainpage.text[0]}</div>
                </div>
                <div className="info-item">
                  <IoCalendarClear className="icon" />
                  <div className="name"><strong>{mainpage.name[1]}</strong></div>
                  <div className="text">{mainpage.text[1]}</div>
                </div>
                <div className="info-item">
                  <IoSchool className="icon" />
                  <div className="name"><strong>{mainpage.name[2]}</strong></div>
                  <div className="text">{mainpage.text[2]}</div>
                </div>
                <div className="info-item">
                  <IoCall className="icon" />
                  <div className="name"><strong>{mainpage.name[3]}</strong></div>
                  <div className="text">{mainpage.text[3]}</div>
                </div>
                <div className="info-item">
                  <IoMail className="icon" />
                  <div className="name"><strong>{mainpage.name[4]}</strong></div>
                  <div className="text">{mainpage.text[4]}</div>
                </div>
                <div className="info-item">
                  <IoSchool className="icon" />
                  <div className="name"><strong>{mainpage.name[5]}</strong></div>
                  <div className="text">{mainpage.text[5]}</div>
                </div>
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