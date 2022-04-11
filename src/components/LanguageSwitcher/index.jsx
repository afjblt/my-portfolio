import flagBrazil from '../../imgs/flagBrazil.svg'
import flagUnitedState from '../../imgs/flagUnitedState.svg'
import { ContainerLanguage } from "./styles";

const languageOptions = [
    {
        name: 'Português',
        value: 'ptBR',
        flag: flagBrazil
    },
    {
        name: 'Estados Unidos',
        value: 'en',
        flag: flagUnitedState
    }
]

function LanguageSwitcher() {
    return ( 
        <ContainerLanguage>
            {languageOptions.map((language) => (
                <button key={language.value}><img src={language.flag} alt={language.name}/></button>
            ))}
        </ContainerLanguage>
     );
}

export default LanguageSwitcher;