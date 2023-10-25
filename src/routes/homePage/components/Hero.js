import React, { useState, useEffect } from 'react';
import './styles/Hero.scss';
import Sgela from './assets/sgela-crop.png';
import { useNavigate } from 'react-router-dom';


function Hero() {
  const professions = ["Software Developer", "Mobile Developer", "Web Developer"];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [currentProfession, setCurrentProfession] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const navigate = useNavigate();


  const gotToHirePage = () => {
    navigate('/React-Portfolio/hire-me'); 
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (currentCharacterIndex < professions[currentProfessionIndex].length) {
          setCurrentProfession((prevProfession) => {
            return (
              prevProfession + professions[currentProfessionIndex][currentCharacterIndex]
            );
          });
          setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        setTimeout(() => {
          setCurrentCharacterIndex(0);
          setCurrentProfession('');
          setIsTyping(true);
          setCurrentProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        }, 2000); // Adjust the pause duration between professions
      }
    }, 150); // Adjust the typing speed

    return () => clearInterval(interval);
  }, [currentProfessionIndex, currentCharacterIndex, isTyping]);

  return (
    <div id="homeDiv">
      <div id="heroDiv">
        <img id="HeroImage" src={Sgela} alt="Graduation Image" />
      </div>
      <div id="storyDiv">
        <div id="homeDivlogo"></div>
        <div className='anim-div'>
          <h2 id="animProfessions">
            {currentProfession} 
          </h2>
        </div>
        <div className='p-holding-div'>
          <h4 className="homeDivP">
              My unwavering fascination with technology has driven my journey from an early age. 
              With a background in software development, I'm actively enhancing my technical skills and expertise. 
                I'm eager to connect with like-minded individuals for tech-related discussions and collaborations.
          </h4>
          <div className='hire-me-div'>
              <div className='hire-me-button' onClick={gotToHirePage}>Hire Me</div>
              <div className='connect-button'>Connect</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
