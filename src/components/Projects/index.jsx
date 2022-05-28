import CardCarousel from "../CardCarousel";
import { ProjectsContainer } from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useRef } from "react";

import costImage from '../../imgs/costImage.png'
import todolistImage from '../../imgs/todolistImage.png'
import searchCepImage from '../../imgs/searchCepImage.png'
import aluracordImage from '../../imgs/aluracordImage.png'
import devfinanceImage from '../../imgs/devfinanceImage.png'
import coffeeImage from '../../imgs/coffeeImage.png'
import CRUDImage from '../../imgs/CRUDImage.png'

function Projects() {
    const carousel = useRef(null)

    function handleLeftClick(e) {
        e.preventDefault()

        carousel.current.scrollLeft -= carousel.current.offsetWidth

    }

    function handleRightClick(e) {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return ( 
        <ProjectsContainer id="projects">
            <h2>Projetos:</h2>
            <p>Trabalhei em muitos projetos no decorrer dos meus estudos como um Desenvolvedor Web, aqui estão alguns dos meus projetos em funcionamento e seus repositórios.</p>

            <div className="carousel" ref={carousel}>

                <CardCarousel src={searchCepImage} title='Buscador de CEP' description='Busca o Cep através de uma API, e povoa os dados na tela. Feito em React' vercel='https://buscador-de-cep-weld.vercel.app/' github='https://github.com/afjblt/buscadorDeCep.git'/>

                <CardCarousel src={todolistImage} title='To Do List' description='Uma lista de tarefas feita em React. As tarefas do app estão sento consumidas a partir de uma API externa. Feito em React' vercel='https://lista-to-do-react.vercel.app/' github='https://github.com/afjblt/lista-to-do-react.git'/>

                <CardCarousel src={devfinanceImage} title='Dev Finance' description='Programa para gerenciamento de entradas e saídas de valores. Feito em JS' github='https://github.com/afjblt/Dev.Finance.git' />

                <CardCarousel src={aluracordImage} title='Alutacord' description='Aluracord é um chat desenvolvido em react em um evento feito pela alura. As mensagens são armzenadas no Supabase. Feito em React' vercel='https://aluracord-matrix-steel-omega.vercel.app/' github='https://github.com/afjblt/aluracord-matrix.git'/>

                <CardCarousel src={coffeeImage} title='Coffee' description='O front-end de uma aplicação com funcionalidade de CRUD e Carrinho. Feito em JS' vercel='https://coffee-mu.vercel.app/' github='https://github.com/afjblt/coffee.git'/>

                <CardCarousel src={CRUDImage} title='CRUD' description='Sistema simples de CRUD. Feito em JS' vercel='https://crud-rouge-five.vercel.app/' github='https://github.com/afjblt/CRUD.git'/>

                <CardCarousel src={costImage} title='Cost' description='Programa com CRUD para projetos e serviços construído em React.' vercel='https://costs-nu.vercel.app/' github='https://github.com/afjblt/costs.git'/>
            </div>

            <div className="navigation">
                <button onClick={handleLeftClick}><MdKeyboardArrowLeft /></button>
                <button onClick={handleRightClick}><MdKeyboardArrowRight /></button>
            </div>
        </ProjectsContainer>
     );
}

export default Projects;