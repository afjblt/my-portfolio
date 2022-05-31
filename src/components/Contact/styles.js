import styled from 'styled-components'
export const ContactContainer = styled.section`
    padding: 0 12rem;
    margin-bottom: 15rem;
    text-align: center;

    h2 {
        font-size: 3.2rem;
        color: #ffbb33;
        margin-bottom: 3rem;
        font-weight: 600;
        text-align: left;
    }

    p {
        font-size: 2.4rem;
        font-weight: 500;
        margin-bottom: 5rem;
    }

    span {
        font-size: 2.4rem;
        color: #ffbb33;
        font-weight: 500;
    }

    .midias {
        margin-top: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        a {
            color: #ffbb33;
            font-size: 5rem;
            transition: .4s;

            &:hover {
                filter: brightness(80%);
            }
        }
    }

    @media (max-width: 1100px) {
        padding: 0 5rem;
    }

    @media (max-width: 770px) {
        h2 {
            text-align: center;
        }
    }

    @media (max-width: 500px) {
        h2 {
            font-size: 2.5rem;
        }

        p, span {
            font-size: 1.6rem;
        }
        
    }
`