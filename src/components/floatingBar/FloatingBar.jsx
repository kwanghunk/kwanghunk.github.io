import React from "react";
import "./FloatingBar.css"

function FloatingBar() {
  return (
    <div className="floating-bar">
      <a href="#home" className="floating-item">I am</a>
      <a href="#tech-stack" className="floating-item">Stack</a>
      <a href="#projects" className="floating-item">Projects</a>
      <a href="#contact" className="floating-item">Contact</a>
      <a 
        href="https://github.com/kwanghunk"
        target="_blank"
        rel="nooperner noreferrer"
        className="floating-item">
          Github
      </a>
      <a href="#top" className="floating-item">Top</a>
    </div>
  )
}
export default FloatingBar;