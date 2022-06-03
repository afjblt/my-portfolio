import { ContactContainer } from "./styles";
import { useTranslation } from 'react-i18next';


import { IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io'

function Contact() {
    const { t } = useTranslation()

    return ( 
        <ContactContainer id="contact">
            <h2>{t('contact')}</h2>

            <p>{t('contactMe')}</p>

            <span>Email: fernandofsilvacosta@gmail.com</span>

            <div className="midias">
                <a href="https://api.whatsapp.com/send?phone=5592991651238" target='_blank' rel="noreferrer"><IoLogoWhatsapp /></a>
                <a href="https://www.linkedin.com/in/fernando-costa23/" target='_blank' rel="noreferrer"><IoLogoLinkedin /></a>
            </div>
        </ContactContainer>
     );
}

export default Contact;