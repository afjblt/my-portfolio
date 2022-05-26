import { CardSkillContainer } from "./styles";

function CardSkill({ icon, title }) {
    return ( 
        <CardSkillContainer>
            {icon}
            <span>{title}</span>
        </CardSkillContainer>
     );
}

export default CardSkill;