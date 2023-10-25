import React, { useState } from 'react';
import './styles/Nav.scss'; 


function Nav(){

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const pdfUrl = 'Resume-Kenny-Mafuna.pdf';
  // Function to handle the download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume-Kenny-Mafuna.pdf'; // You can specify the desired file name
    link.click();
  };

  return(
      <div id="headerDiv">
        <div id="menu-toggle" className="menu-icon" onClick={() => setIsMenuVisible(!isMenuVisible)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul id="navBar" className={`menu-items ${isMenuVisible ? 'show-menu' : ''}`}>
          
          <li>
            <a href="#">Home</a>
          </li><li>
            <a href="#homeDiv">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#contactDiv">Contact</a>
          </li>
          <li>
            <a  className='cv-btn' onClick={handleDownload}>CV</a>
          </li>
        </ul>
      </div>
  )
}

export default Nav;