import { HiOutlineDownload } from 'react-icons/hi'
import { AiFillEye } from 'react-icons/ai'

import perfil from '../../imgs/perfil.svg'

import { HomeContainer } from "./styles";

function Home() {
    return ( 
        <>
            <HomeContainer id='#'>
                <div className="left">
                    <p className='hi'>Olá, eu sou</p>
                    <span>Fernando F. S. Costa</span>
                    <p className='info'>Desenvolvedor Frontend, uso principalmente as tecnologias: REACT, JavaScript, HTML, CSS.</p>
                    <div className="buttons">
                        <a href='https://drive.google.com/file/d/1cr0eHm0uTNp3Q1lqgWGQFmg-osshVaN7/view?usp=sharing' target='_blank'>Baixar CV <HiOutlineDownload /></a>
                        <a href='#projects'>Projetos <AiFillEye /></a>
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