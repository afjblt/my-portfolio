import { useTranslation } from 'react-i18next';
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
    const { i18n } = useTranslation()

    return ( 
        <ContainerLanguage>
            {languageOptions.map((language) => (
                <button onClick={() => {
                    i18n.changeLanguage(language.value)
                }} key={language.value}><img src={language.flag} alt={language.name}/></button>
            ))}
        </ContainerLanguage>
     );
}

export default LanguageSwitcher;