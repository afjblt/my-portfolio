import CardCarousel from "../CardCarousel";
import { ProjectsContainer } from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useRef } from "react";
import { useTranslation } from 'react-i18next';


import costImage from '../../imgs/costImage.png'
import todolistImage from '../../imgs/todolistImage.png'
import searchCepImage from '../../imgs/searchCepImage.png'
import aluracordImage from '../../imgs/aluracordImage.png'
import devfinanceImage from '../../imgs/devfinanceImage.png'
import coffeeImage from '../../imgs/coffeeImage.png'
import CRUDImage from '../../imgs/CRUDImage.png'
import netflixImage from '../../imgs/netflixImage'

function Projects() {
    const { t } = useTranslation()

    const carousel = useRef(null)

    function handleLeftClick(e) {
        e.preventDefault()

        carousel.current.scrollLeft -= (carousel.current.offsetWidth - 150)

    }

    function handleRightClick(e) {
        e.preventDefault()
        carousel.current.scrollLeft += (carousel.current.offsetWidth - 150)
    }

    return ( 
        <ProjectsContainer id="projects">
            <h2>{t('projects')}:</h2>
            <p>{t('projectsIntro')}</p>

            <div className="carousel" ref={carousel}>

                <CardCarousel src={netflixImage} title='Clone Netflix' description={t('searchCepInfo')} vercel='https://clone-netflix-three-iota.vercel.app/' github='https://github.com/afjblt/clone-netflix'/>
                
                <CardCarousel src={searchCepImage} title={t('searchCepTitle')} description={t('searchCepInfo')} vercel='https://buscador-de-cep-weld.vercel.app/' github='https://github.com/afjblt/buscadorDeCep.git'/>

                <CardCarousel src={todolistImage} title='To Do List' description={t('toDoListInfo')} vercel='https://lista-to-do-react.vercel.app/' github='https://github.com/afjblt/lista-to-do-react.git'/>

                <CardCarousel src={devfinanceImage} title='Dev Finance' description={t('devFinanceInfo')} vercel='https://dev-finance-ten.vercel.app/' github='https://github.com/afjblt/Dev.Finance.git' />

                <CardCarousel src={aluracordImage} title='Aluracord' description={t('aluracordInfo')} vercel='https://aluracord-matrix-steel-omega.vercel.app/' github='https://github.com/afjblt/aluracord-matrix.git'/>

                <CardCarousel src={coffeeImage} title='Coffee' description={t('coffeeInfo')} vercel='https://coffee-mu.vercel.app/' github='https://github.com/afjblt/coffee.git'/>

                <CardCarousel src={CRUDImage} title='CRUD' description={t('crudInfo')} vercel='https://crud-rouge-five.vercel.app/' github='https://github.com/afjblt/CRUD.git'/>

                <CardCarousel src={costImage} title='Cost' description={t('costInfo')} vercel='https://costs-nu.vercel.app/' github='https://github.com/afjblt/costs.git'/>
            </div>

            <div className="navigation">
                <button onClick={handleLeftClick}><MdKeyboardArrowLeft /></button>
                <button onClick={handleRightClick}><MdKeyboardArrowRight /></button>
            </div>
        </ProjectsContainer>
     );
}

export default Projects;