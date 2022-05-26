import styled from 'styled-components'
export const CardSkillContainer = styled.div`
    width: 20rem;
    height: 20rem;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    svg {
        font-size: 5rem;
    }

    span {
        font-size: 2rem;
        font-weight: 600;
    }

    transition: .4s;

    &:hover {
        background: transparent;
        border: 2px solid black;

        color: #ffbb33;
    }
`