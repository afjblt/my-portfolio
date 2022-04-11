import styled from 'styled-components'

export const HeaderContainer = styled.div `
    background: black;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 2.8rem;
        font-weight: 600;
        color: #ffbb33;
        margin-left: 16.3rem;
    }

    ul {
        display: flex;
        gap: 5.2rem;
        margin-right: 4.6rem;
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

`