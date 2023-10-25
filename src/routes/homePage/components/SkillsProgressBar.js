import React from 'react';
import './styles/SkillsProgressBar.scss';

function SkillsProgressBar() {
  return (
    <div id="progress">
      <div className="progressHolder heart">
        <h1 id="progressLanguages">Skills</h1>
        <div className="row">
          <div className="progress-bar">
            <label htmlFor="python">Python</label>
            <input type="range" id="python" min="0" max="100" step="1" value="95" />
            <span className="value">95%</span>
          </div>
          <div className="progress-bar right-progress">
            <label htmlFor="java">Java</label>
            <input type="range" id="java" min="0" max="100" step="1" value="85" />
            <span className="value">85%</span>
          </div>
        </div>
        <div className="row">
          <div className="progress-bar ">
            <label htmlFor="flutter">Flutter</label>
            <input type="range" id="flutter" min="0" max="100" step="1" value="85" />
            <span className="value">85%</span>
          </div>
          <div className="progress-bar right-progress">
            <label htmlFor="javascript">JavaScript</label>
            <input type="range" id="javascript" min="0" max="100" step="1" value="90" />
            <span className="value">90%</span>
          </div>
        </div>
        <div className="row">
          <div className="progress-bar">
            <label htmlFor="react">React</label>
            <input type="range" id="react" min="0" max="100" step="1" value="85" />
            <span className="value">85%</span>
          </div>
          <div className="progress-bar right-progress">
            <label htmlFor="mysql">MySQL</label>
            <input type="range" id="mysql" min="0" max="100" step="1" value="95" />
            <span className="value">95%</span>
          </div>
        </div>
        <div className="row">
          <div className="progress-bar">
            <label htmlFor="figma">Figma</label>
            <input type="range" id="figma" min="0" max="100" step="1" value="75" />
            <span className="value">75%</span>
          </div>
          <div className="progress-bar right-progress">
            <label htmlFor="coreldraw">CorelDraw</label>
            <input type="range" id="coreldraw" min="0" max="100" step="1" value="65" />
            <span className="value">65%</span>
          </div>
        </div>
        <div className="row">
          <div className="progress-bar">
            <label htmlFor="html">HTML</label>
            <input type="range" id="html" min="0" max="100" step="1" value="95" />
            <span className="value">95%</span>
          </div>
          <div className="progress-bar right-progress">
            <label htmlFor="css">CSS</label>
            <input type="range" id="css" min="0" max="100" step="1" value="95" />
            <span className="value">95%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsProgressBar;
