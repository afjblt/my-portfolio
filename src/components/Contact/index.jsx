import { ContactContainer } from "./styles";

import { IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io'

function Contact() {
    return ( 
        <ContactContainer id="contact">
            <h2>Contato</h2>

            <p>Entre em contato comigo, vamos fazer acontecer juntos!</p>

            <span>Email: fernandofsilvacosta@gmail.com</span>

            <div className="midias">
                <a href="https://api.whatsapp.com/send?phone=5592991651238" target='_blank' rel="noreferrer"><IoLogoWhatsapp /></a>
                <a href="https://www.linkedin.com/in/fernando-costa23/" target='_blank' rel="noreferrer"><IoLogoLinkedin /></a>
            </div>
        </ContactContainer>
     );
}

export default Contact;