import styled from 'styled-components'
export const ProjectsContainer = styled.section`
    padding: 0 12rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
        font-size: 3.2rem;
        color: #ffbb33;
        font-weight: 600;
    }

    p {
        font-size: 1.8rem;
        font-weight: 500;
    }

    .carousel {
        display: flex;
        overflow-x: hidden;
        scroll-behavior: smooth;
        gap: 2rem;
    }

    .navigation {
        width: 100%;
        margin-bottom: 4rem;
        display: flex;
        justify-content: center;
        gap: 5rem;

        button {
            font-size: 5rem;
            background: black;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: .8rem;
            color: white;
            border: none;
            cursor: pointer;
            width: 5rem;
            height: 5rem;

            transition: .2s;

            &:hover {
                background: transparent;
                border: 2px solid black;
                color: #ffbb33;
            }
        }
    }
`