import styled from 'styled-components'
export const AboutMeContainer = styled.section`
    margin: 4rem 12rem;

    h2 {
        font-size: 3.2rem;
        color: #ffbb33;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        text-align: justify;
    }

    .xp {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        span {
            font-size: 9.6rem;
            color: #ffbb33;
            font-weight: 600;
        }

        p {
            font-size: 2rem;
            margin-bottom: 0;
        }
    }

    .skills {
        margin: 1rem 0 3rem;
        display: flex;
        justify-content: space-between;        
    }

    .additionalSkills {
        margin-top: 1rem;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 3fr));
        justify-content: center;

        .color {
            border: 2px solid #ffbb33;
            span {
                color: #ffbb33;
            }
        }
    }
`