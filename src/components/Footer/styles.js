import styled from 'styled-components'
export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    gap: 5rem;
    text-align: center;
    padding: 3rem;

    font-size: 1.6rem;
    font-weight: 500;
    white-space: nowrap;
    opacity: .5;

    @media (max-width: 600px) {
        font-size: 1.4rem;
        gap: 3rem;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 1rem;
    }

`