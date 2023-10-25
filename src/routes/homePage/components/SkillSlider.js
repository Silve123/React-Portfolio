import React, { useState, useEffect } from 'react';
import './styles/SkillSlider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faPython,
  faJava,
  faDocker,
  faGit,
  faGoogle,
  faLinux,
  faHtml5,
  faCss3,
  faBootstrap,
  faJs,
  faFigma, 
} from '@fortawesome/free-brands-svg-icons';

const skills = [
  faReact,
  faPython,
  faJava,
  faDocker,
  faGit,
  faGoogle,
  faLinux,
  faHtml5,
  faCss3,
  faBootstrap,
  faJs,
  faFigma,
];

function SkillSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
          >
            <FontAwesomeIcon className='icon' icon={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSlider;
