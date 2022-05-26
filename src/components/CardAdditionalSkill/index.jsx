import { CardAdditionalSkillContainer } from "./styles";

function CardAdditionalSkill({ icon, title, description, className }) {
    return ( 
        <CardAdditionalSkillContainer className={className}>
            {icon}
            <span>{title}</span>
            <p>{description}</p>
        </CardAdditionalSkillContainer>
     );
}

export default CardAdditionalSkill;