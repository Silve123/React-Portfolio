import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss'; // Import your SCSS file
import CertificateCard from './CertificateCard'


function App() {
  const professions = ["Software Dev", "Mobile Dev", "Web Dev"];
  const [count, setCount] = useState(0);
  const [currentProfession, setCurrentProfession] = useState(professions[0]);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const certificates = [
    {
      name: 'Responsive Web Design',
      description: 'This certificate signifies proficiency in creating web designs that adapt seamlessly to various screen sizes and devices. It covers concepts such as flexible layouts, media queries, and responsive web development practices, ensuring websites look and function optimally on desktops, tablets, and mobile phones.',
      source: 'FreeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/silver915/responsive-web-design',
    },
    {
      name: 'JavaScript Algorithms and Data Structures Certificate',
      description: "This certificate validates expertise in JavaScript's core concepts, algorithms, and data structures. It demonstrates the ability to solve complex coding challenges, work with arrays, objects, and functional programming, and implement data structures like linked lists and trees. It's essential for mastering JavaScript development.",
      source: 'FreeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/silver915/javascript-algorithms-and-data-structures',
    },
    {
      name: 'Introduction to Programming Using Python Certificate',
      description: "This certificate represents proficiency in Python, a versatile and beginner-friendly programming language. It covers fundamental programming concepts, including variables, data types, control structures, and functions. It's an ideal starting point for anyone new to programming and seeking a solid foundation in Python.",
      source: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/ac3e65cb857a',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % professions.length);
    }, 2000); // Adjust the interval to match the animation duration

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCurrentProfession(professions[count]);
    },2000); // Adjust the delay to match half of the animation duration
  }, [count]);


  return (
    <div className="App">
      <header>
        <div id="headerDiv">
          <h1 id="headerName">
            <span style={{ color: 'white' }}>_</span>KennyMafuna
          </h1>
          <div id="menu-toggle" className="menu-icon" onClick={() => setIsMenuVisible(!isMenuVisible)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul id="navBar" className={`menu-items ${isMenuVisible ? 'show-menu' : ''}`}>
            <li>
              <a href="#homeDiv">About</a>
            </li>
            <li>
              <a href="#expertiseDiv">Skills</a>
            </li>
            <li>
              <a href="#mainCertificateHolder">Certificates</a>
            </li>
            <li>
              <a href="#contactDiv">Contact</a>
            </li>
          </ul>

          <div id="spaceHeaderRight"></div>
        </div>
      </header>


      <main>
        {/* Home */}
        <div id="homeDiv">
          <div id="innerHomeDiv">
            <div id="heroDiv">
              <img id="HeroImage" src="graduation-removebg-preview.png" alt="Graduation Image" />
              <h2 id="animProfessions">
                {currentProfession}
              </h2>
            </div>
            <div id="storyDiv">
              <h1 id="homeDivH">Whoami</h1>
              <h4 className="homeDivP">
                Ever since I was young, I've felt drawn to the world of technology.
              </h4>
              {isTextVisible && (
                <h4 className='homeDivP'>
                   When I got my first computer at the
                age of 12, I started volunteering at a local internet cafe, and that experience only deepened my passion.
                Recently, I completed my studies in software development, and I feel incredibly grateful to have pursued
                something I truly love. There's nowhere else I'd rather be, and I consider it a privilege to be on this
                journey.<br></br><br></br>
                At the moment, I am not currently employed and am actively working towards further developing my
                skills and expertise in the tech industry. I'm excited about the opportunity to learn and grow, and I'm
                open to connecting with fellow enthusiasts, sharing ideas, or discussing anything tech-related. Thank you
                for visiting my portfolio website; please feel free to explore my work and reach out if you'd like to
                connect or engage in tech-related conversations
                </h4>
              )}
              <a id='readMoreBtn' onClick={() => setIsTextVisible(!isTextVisible)}>
                {isTextVisible ? "Read Less" : "Read More"}
              </a>
            </div>


          </div>
        </div>

        {/* Expertise */}
        <div id="expertiseDiv">
          <h1 id="expertiseHeading">My Expertise</h1>
          <div id="blockHolder">
            <div className="blockDiv">
              <h2 className="blockHedaing">Software Development</h2>
              <p>
                During my studies at WeThinkCode. I gained experience in software development areas such as APIs, Agile
                and Brownfield development, functional and object-oriented programming, as well as unit testing and
                acceptance testing. Through hands-on projects and coursework, I developed a deep understanding of how to
                build effective software solutions that meet customer needs.
              </p>
            </div>
            <div className="blockDiv">
              <h2 className="blockHedaing">Mobile Development</h2>
              <p>
                During my studies at WeThinkCode. I gained valuable experience in mobile development, including building
                user-friendly interfaces, working with various mobile frameworks. Through hands-on projects and
                coursework, I learned how to build effective, high-quality mobile solutions that meet customer needs and
                expectations.
              </p>
            </div>
            <div className="blockDiv">
              <h2 className="blockHedaing">Web Development</h2>
              <p>
                During my studies at WeThinkCode, I gained valuable experience in web development and obtained
                certifications in responsive web design and JavaScript algorithms and data structures. Through hands-on
                projects and coursework, I learned how to build effective, high-quality web solutions that meet customer
                needs.
              </p>
            </div>
          </div>
          <div id="progress">
            <h1 id='progressLanguages'>Skills</h1>
            <div className="progress-bar">
              <label htmlFor="python">Python</label>
              <input type="range" id="python" min="0" max="100" step="1" value="95"></input>
              <span className="value">95%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="java">Java</label>
              <input type="range" id="java" min="0" max="100" step="1" value="85"></input>
              <span className="value">85%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="python">FLutter</label>
              <input type="range" id="python" min="0" max="100" step="1" value="85"></input>
              <span className="value">85%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="java">JavaScript</label>
              <input type="range" id="java" min="0" max="100" step="1" value="90"></input>
              <span className="value">90%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="python">React</label>
              <input type="range" id="python" min="0" max="100" step="1" value="85"></input>
              <span className="value">85%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="java">MySql</label>
              <input type="range" id="java" min="0" max="100" step="1" value="95"></input>
              <span className="value">95%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="java">Figma</label>
              <input type="range" id="java" min="0" max="100" step="1" value="75"></input>
              <span className="value">75%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="java">CorelDraw</label>
              <input type="range" id="java" min="0" max="100" step="1" value="65"></input>
              <span className="value">65%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="java">HTML</label>
              <input type="range" id="java" min="0" max="100" step="1" value="95"></input>
              <span className="value">95%</span>
            </div>
            <div className="progress-bar">
              <label htmlFor="java">CSS</label>
              <input type="range" id="java" min="0" max="100" step="1" value="95"></input>
              <span className="value">95%</span>
            </div>
          </div>
          
        </div>
        <div id='mainCertificateHolder'>
          <div id="certificateBackground">
            <h1>Certificates</h1>
            <div id="certificatesDiv">
                {certificates.map((certificate, index) => (
                  <CertificateCard key={index} {...certificate} />
                ))}
            </div>
          </div>
        </div>
        <div id="contactDiv">
          <a className="icons" href="https://www.linkedin.com/in/kenny-mafuna-aba0a9207/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="icons" href="mailto:kennymafuna321@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a className="icons" href="https://github.com/Silve123" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
