import styled from 'styled-components'
export const CardCarouselContainer = styled.div`
    background: #ffbb3320;
    width: 34.5rem;
    border-radius: .8rem;
    flex: none;
    height: auto;

    .image {
        img {
            border: 2px solid #ffbb33;
            border-radius: .8rem .8rem 0 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        padding: 1rem 2rem 2rem;

        span {
            font-size: 2.4rem;
            font-weight: 600;
        }

        p {
            margin: .5rem 0 1rem;
            font-size: 1.7rem;
            font-weight: 500;
            text-align: justify;
            height: 14rem;
            
            
        }

        .buttons {
            display: flex;
            align-items: center;
            gap: 2rem;

            a {
                width: 14.5rem;
                height: 3.6rem;

                border-radius: .8rem;  

                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.6rem;
                font-weight: 600;
                gap: .5rem;
                background-color: black;
                color: white;
                cursor: pointer;

                svg {
                    font-size: 2rem;
                }

                transition: .3s;

                &:hover {
                    background: transparent;
                    border: 2px solid black;
                    color: #FFBB33;
                }
            }
        }
    }

    @media (max-width: 445px) {
        width: 23rem;

        .info {
            span {
                font-size: 1.8rem;
            }

            p {
                font-size: 1.4rem;
            }

            .buttons {
                a {
                    font-size: 1.2rem;
                }
            }
        }

    }

   
`