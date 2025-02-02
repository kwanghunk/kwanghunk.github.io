import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Contact from './components/contact/Contact';
import FloatingBar from './components/floatingBar/FloatingBar';
import Home from './components/home/Home';
import MainPage from './components/mainPage/MainPage';
import NavigationBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import TechStack from './components/techstack/TechStack';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // 애니메이션 지속 시간(1초)
      easing: "ease-in-out", // 부드러운 전환 효과
    })
  }, []);

  return (
    <div className="App">s
      <NavigationBar />
      
      <MainPage />
      <div data-aos="fade-up">
        <Home />
      </div>
      <div data-aos="fade-up">
        <Projects />
      </div>
      <div data-aos="fade-up">
        <TechStack />
      </div>
      
      <Contact />
      <FloatingBar />
    </div>
  );
}

export default App;
