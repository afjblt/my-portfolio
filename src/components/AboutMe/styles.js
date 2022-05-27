import styled from 'styled-components'
export const AboutMeContainer = styled.section`

    h2 {
        padding: 4rem 12rem 0;
        font-size: 3.2rem;
        color: #ffbb33;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    p {
        padding: 0 12rem;
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        text-align: justify;
    }

    .xp {
        padding: 0 12rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 3rem;

        span {
            font-size: 9.6rem;
            color: #ffbb33;
            font-weight: 600;
        }

        p {
            padding: 0;
            font-size: 2rem;
            margin-bottom: 0;
        }
    }

    .skills {
        margin: 1rem 0 3rem;
        display: flex;
        flex-wrap: wrap;
        padding: 0 12rem;
        justify-content: space-between;
        gap: 2rem;
    }

    .additionalSkills {
        padding: 0 12rem;
        margin: 1rem 0 14rem;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: space-between;

        p {
            padding: 0;
        }

        .color {
            border: 2px solid #ffbb33;
            span {
                color: #ffbb33;
            }
        }
    }

    @media (max-width: 1100px) {
        .skills {
            padding: 0 5rem;
            justify-content: center;
        }

        .additionalSkills {
            justify-content: center;
            padding: 0 5rem;
        }

        h2 {
            padding: 4rem 5rem 0;
        }

        p {
            padding: 0 5rem;
        }

        .xp {
            padding: 0 5rem;
        }
    }

    @media (max-width: 770px) {
        .xp {
            span {
                font-size: 8rem;
            }

            p {
                font-size: 1.8rem;
                margin-bottom: 0;
            }
        } 
        
        h2 {
            text-align: center;
        }
    }

    @media (max-width: 500px) {
        .xp {
            flex-direction: column;
            gap: 0;
        }

        h2 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.6rem;
        }
        
    }
`