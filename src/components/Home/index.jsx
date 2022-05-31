import { HiOutlineDownload } from 'react-icons/hi'
import { AiFillEye } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

import perfil from '../../imgs/perfil.svg'

import { HomeContainer } from "./styles";

function Home() {
    const { t } = useTranslation()
    return ( 
        <>
            <HomeContainer id='#'>
                <div className="left">
                    <p className='hi'>{t('hi')}</p>
                    <span>Fernando F. S. Costa</span>
                    <p className='info'>{t('infoHome')}</p>
                    <div className="buttons">
                        <a href='https://drive.google.com/file/d/1cr0eHm0uTNp3Q1lqgWGQFmg-osshVaN7/view?usp=sharing' target='_blank' rel="noreferrer">{t('cv')} <HiOutlineDownload /></a>
                        <a href='#projects'>{t('projects')} <AiFillEye /></a>
                    </div>
                </div>
                <div className="right">
                    <img src={perfil} alt="Fernando Costa" />
                </div>
            </HomeContainer>
            <div className="bar" style={{
                width: '100%',
                height: '10rem',
                background: 'black',
                marginTop: '-1rem',
                zIndex: '1',
            }}></div>
        </>
     );
}

export default Home;