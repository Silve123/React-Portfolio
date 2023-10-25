import './styles/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
    faLinkedin, 
    faGit,
    } from '@fortawesome/free-brands-svg-icons';

import {
    faEnvelope,
    } from '@fortawesome/free-solid-svg-icons'; 

function Footer(){
    const navigate = useNavigate();


    const getToHomePage = () => {
      navigate('/React-Portfolio'); 
    }
    const getToAboutPage = () => {
        // navigate('/React-Portfolio/About'); 
    }
    const getToPortfolioPage = () => {
        // navigate('/React-Portfolio/Portfolio'); 
    }
    const getToContactPage = () => {
        navigate('/React-Portfolio/hire-me'); 
    }

    return (
        <div className='FooterDiv'>
            <div className='otherLinks'>
                <div className='manuLinks'>
                    <a  className="manueSingleLink" onClick={getToHomePage}>Home</a>
                    <a className="manueSingleLink" onClick={getToAboutPage}>About</a>
                    <a className="manueSingleLink" onClick={getToPortfolioPage}>Portfolio</a>
                    <a className="manueSingleLink" onClick={getToContactPage}>Contact</a>
                </div>
            </div>
            <div className="contactDiv">
                <a className="icon" href="https://www.linkedin.com/in/kenny-mafuna-aba0a9207/" target="_blank">
                    <FontAwesomeIcon className='singleIcon' icon={faLinkedin}/>
                </a>
                <a className="icon" href="mailto:kennymafuna321@gmail.com">
                    <FontAwesomeIcon className='singleIcon' icon={faEnvelope}/>
                </a>
                <a className="icon" href="https://github.com/Silve123" target="_blank">
                    <FontAwesomeIcon className='singleIcon' icon={faGit} />
                </a>
            </div>
        </div>
    )
}

export default Footer;