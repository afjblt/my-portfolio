import { AboutMeContainer } from "./styles";

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents, SiMaterialui } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'
import { FaLaptopCode } from 'react-icons/fa'
import { BiGitCompare } from 'react-icons/bi'
import { ImNpm } from 'react-icons/im'
import CardSkill from "../CardSkill";
import CardAdditionalSkill from "../CardAdditionalSkill";


function AboutMe() {
    return ( 
        <AboutMeContainer id="about">
            <h2>Sobre mim:</h2>
            <p>Olá, meu nome é Fernando Filipe da Silva Costa, tenho 20 anos, estou cursando o 7° Período de Ciência da Computação na UNIP - Universidade Paulista. Programo há 2 anos, e nesse período pude adquirir conhecimentos em HTML5, CSS, JS, React, entre outras ferramentas, sempre tentando estar cada vez mais atualizado com as tecnologias em alta do mercado. Atualmente estou buscando, aprofundar meus conhecimentos em React, e também estou a procura de uma vaga como desenvolvedor Jr.</p>

            <div className="xp">
                <span>6</span>
                <p>Meses de experiência profissional. Utilizando no dia a dia como principal ferramneta o, React. Ainda nesta experiência pude adquirir bons conhecimentos em Figma. Criando do zero um protótipo que foi solicitado ao time no decorrer do cargo</p>
            </div>

            <div className="skills">
                <CardSkill icon={<SiHtml5 />} title='HTML'/>
                <CardSkill icon={<SiCss3 />} title='CSS'/>
                <CardSkill icon={<SiJavascript />} title='JavaScript'/>
                <CardSkill icon={<SiReact />} title='React'/>
            </div>

            <h2>Habilidades Adicionais</h2>

            <div className="additionalSkills">
                <CardAdditionalSkill 
                    icon={<CgFigma />} 
                    title='FIGMA' 
                    description='Já tive em minha experiência de profissional, desenvolver do zero um protótipo para um serviço que foi solicitado para o time.'
                />
                <CardAdditionalSkill 
                    className='color' 
                    icon={<FaLaptopCode />} 
                    title='FRONTENT DEVELOPMENT' 
                    description='Programo na parte de frontend a 3 anos, profissionalmente a 6 meses. Me apaixonei pela área dês da primeira vez que entrei em contato com ela em 2019.'
                />
                <CardAdditionalSkill 
                    icon={<SiStyledcomponents />} 
                    title='STYLED-COMPONENTS' 
                    description='Uso essa lib tanto em meus projetos pessoais, como também já usei em um projeto na minha primeria oportunidade como Dev Frontend.'
                />
                <CardAdditionalSkill 
                    className='color'
                    icon={<BiGitCompare />} 
                    title='VERSIONAMENTO DE CÓDIGO' 
                    description='Uso GIT para versionamento de código.'
                />
                <CardAdditionalSkill 
                    icon={<ImNpm />} 
                    title='NPM' 
                    description='Entendo de gerenciamento de pacotes usando NPM.'
                />
                <CardAdditionalSkill 
                    className='color'
                    icon={<SiMaterialui />} 
                    title='MUI REACT' 
                    description='Pode-se dizer que essa lib foi um dos últimos aprendizados que obtive. E simplesmente achei incrível o quanto essa ferramenta facilita o trabaho.'
                />
            </div>

        </AboutMeContainer>
     );
}

export default AboutMe;