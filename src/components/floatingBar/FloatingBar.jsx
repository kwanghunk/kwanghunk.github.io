import React from "react";
import { floatingbar } from "../../data/portfolio";
import { FaCircleChevronUp } from "react-icons/fa6";
import "./FloatingBar.css"

function FloatingBar() {
  return (
    <div className="floating-bar">
      <div className="floating-linkGroup">
        <a href={floatingbar.kakao} target="_blank" rel="noopener noreferrer" className="floating-link">
          <img src={require(`../../asset/img/${floatingbar.src[0]}.svg`)} alt="Kakao" className="icon" />
          <p className="link-title">KakaoTalk</p>
        </a>
        <a href={floatingbar.github} target="_blank" rel="noopener noreferrer" className="floating-link">
          <img src={require(`../../asset/img/${floatingbar.src[1]}.svg`)} alt="GitHub" className="icon" />
          <p className="link-title">GitHub</p>
        </a>
        <a href={floatingbar.youtube} target="_blank" rel="noopener noreferrer" className="floating-link">
          <img src={require(`../../asset/img/${floatingbar.src[2]}.svg`)} alt="YouTube" className="icon" />
          <p className="link-title">YouTube</p>
        </a>
      </div>
      <div className="floating-btn">
      <a href="#top" className="floating-item">
        <FaCircleChevronUp className="top-icon" />
      </a>
      </div>
    </div>
  )
}
export default FloatingBar;