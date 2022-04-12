import styled from 'styled-components'

export const ContainerLanguage = styled.div`
    display: flex;
    gap: 2rem;
            
    button {
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 35px;
        }
    }

    @media (max-width: 540px) {
        gap: 1rem;

        button {
            img {
                width: 30px;
            }
        }
    }
`