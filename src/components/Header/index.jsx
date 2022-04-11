import LanguageSwitcher from "../LanguageSwitcher";
import { HeaderContainer } from "./styles";

function Header() {
    return ( 
        <HeaderContainer>
            <h1>Fernando Costa</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <LanguageSwitcher />
                </ul>
            </nav>
        </HeaderContainer>
     );
}

export default Header;