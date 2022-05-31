import elipse from '../../imgs/ellipse.svg'

import styled from 'styled-components'
export const HomeContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;

    .left {
        margin-top: -3rem;

        .hi {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        span {
            font-size: 4.5rem;
            background: black;
            color: #FFBB33;
            padding: .5rem 2rem;
            font-weight: 500;
        }

        .info {
            font-size: 1.8rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
            width: 43rem;
        }

        .buttons {
            display: flex;
            align-items: center;
            gap: 4rem;

            a {
                width: 16rem;
                height: 4.8rem;

                border-radius: .8rem;  

                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.6rem;
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
    

    .right {
        margin-top: 9rem;
        z-index: -1;
        width: 35rem;
        background-image: url(${elipse});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 0rem 10rem;

        img {
            margin-left: 1rem;
            width: 33rem;
        }
    }

    @media (max-width: 930px) {
        .left {
            margin-left: 2rem;

            .hi {
                font-size: 2rem;
            }

            span {
                font-size: 3.5rem;
            }

            .info {
                font-size: 1.5rem;
            }
        }

        .right {
            margin-right: 2rem;
            width: 33rem;

            img {
                width: 30rem;
            }
        }
    }

    @media (max-width: 770px) {
        .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 3rem;

            span {
                font-size: 2.5rem;
            }

            .info {
                font-size: 1.3rem;
                width: 30rem;
            }

            .buttons {
                gap: 2rem;
            }
        }

        .right {
            margin-right: 4rem;
            width: 27rem;
            
            img {
                width: 25rem;
            }
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;
        .left {
            margin: 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            span {
                font-size: 2.5rem;
            }

            .info {
                font-size: 1.3rem;
                width: 30rem;
            }

            .buttons {
                gap: 2rem;
            }
        }

        .right {
            margin: 0;
            width: 27rem;
            
            img {
                width: 25rem;
            }
        }
    }

    .bar {
        height: 5rem;
    }

`