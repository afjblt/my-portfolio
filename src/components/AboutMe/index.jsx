import { AboutMeContainer } from "./styles";
import { useTranslation } from 'react-i18next';


import { SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents, SiMaterialui } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'
import { FaLaptopCode } from 'react-icons/fa'
import { BiGitCompare } from 'react-icons/bi'
import { ImNpm } from 'react-icons/im'
import CardSkill from "../CardSkill";
import CardAdditionalSkill from "../CardAdditionalSkill";


function AboutMe() {
    const { t } = useTranslation()

    return ( 
        <AboutMeContainer id="about">
            <h2>{t('about')}:</h2>
            <p>{t('apresentation')}</p>

            <div className="xp">
                <span>6</span>
                <p>{t('xp')}</p>
            </div>

            <div className="skills">
                <CardSkill icon={<SiHtml5 />} title='HTML'/>
                <CardSkill icon={<SiCss3 />} title='CSS'/>
                <CardSkill icon={<SiJavascript />} title='JavaScript'/>
                <CardSkill icon={<SiReact />} title='React'/>
            </div>

            <h2>{t('additionalSkills')}</h2>

            <div className="additionalSkills">
                <CardAdditionalSkill 
                    icon={<CgFigma />} 
                    title='FIGMA' 
                    description={t('figma')}
                />
                <CardAdditionalSkill 
                    className='color' 
                    icon={<FaLaptopCode />} 
                    title='FRONTENT DEVELOPMENT' 
                    description={t('frontend')}
                />
                <CardAdditionalSkill 
                    icon={<SiStyledcomponents />} 
                    title='STYLED-COMPONENTS' 
                    description={t('styledComponent')}
                />
                <CardAdditionalSkill 
                    className='color'
                    icon={<BiGitCompare />} 
                    title={t('gitTitle')}
                    description={t('git')}
                />
                <CardAdditionalSkill 
                    icon={<ImNpm />} 
                    title='NPM' 
                    description={t('npm')}
                />
                <CardAdditionalSkill 
                    className='color'
                    icon={<SiMaterialui />} 
                    title='MUI REACT' 
                    description={t('mui')}
                />
            </div>

        </AboutMeContainer>
     );
}

export default AboutMe;