import './styles/FloatingWhatsapp.scss'
import WhatsappIcon from './assets/whatsapp.png'

function FloutingWhatsapp(){
    return (
        <div className="whatsapp-button">
          <a
            href="https://wa.me/+27719080400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={WhatsappIcon}
              alt="WhatsApp"
            />
          </a>
        </div>
    )
}

export default FloutingWhatsapp;