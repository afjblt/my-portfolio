import styled from 'styled-components'
export const HeaderContainer = styled.header `
    position: fixed;
    background: black;
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;

    h1 {
        font-size: 2.8rem;
        font-weight: 600;
        color: #ffbb33;
    }

    nav {
        display: flex;
        gap: 12rem;
    }

    ul {
        display: flex;
        gap: 5.2rem;
        margin-left: 4.6rem;
        font-weight: 600;
        font-size: 1.8rem;
        li {
            display: flex;
            align-items: center;

            a {
                color: white;
                transition: .4s;

                &:hover {
                    color: #ffbb33;
                }
            }      
            
        }        
    }



    /*======== MENU MOBILE =========*/

    .hamburger {
        display: none;
        cursor: pointer;
        position: absolute;
        width: 4rem;
        height: 2rem;
        margin-top: .5rem;
        right: 1.5rem;

    }

    .hamburger::after {
        content: '';
        position: absolute;
        width: 3rem;
        height: .4rem;
        background-color: white;

        border-radius: 2rem;

        transition: .8s ease;
    }

    .hamburger::before {
        content: '';
        position: absolute;
        width: 2rem;
        height: .4rem;
        background-color: white;
        top: 1.5rem;
        right: 1em;

        border-radius: 2rem;

        transition: .8s ease;
    }

    .hamburger.active::after {
        transform: rotate(225deg);
        top: .8rem;
    }

    .hamburger.active::before {
        transform: rotate(-225deg);
        width: 3rem;
        top: .8rem;
    }

    /*========= MEDIA QUERY ========*/

    @media (max-width: 999px) {
        nav {
            gap: 3rem;
        }
    }

    @media (max-width: 952px) {
        gap: 0;
        ul {
            gap: 3rem;
        }
    }

    @media (max-width: 837px) {
        h1 {
            font-size: 2.2rem;
        }

        ul {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 700px) {
        ul {
            position: absolute;
            top: 8vh;
            left: -100%;
            width: 40vw;
            height: 92vh;
            background: rgba(0, 0, 0, 0.5);
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            /* transform: translateX(100%); */
            transition: .5s ease-in;

            li:first-child {
                margin-top: 3rem;
            }

            li {
                opacity: 0;
            }
        }

        ul.active {
            left: 0;
            position: fixed;

            li {
                opacity: 1;
            }
        }

        .hamburger {
            display: block;
        }

        
    }

    @media (max-width: 540px) {
        nav {
            margin-right: 5rem;
        }
    }

`