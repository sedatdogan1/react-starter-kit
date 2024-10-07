import styled, {css} from "styled-components"

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    //props ile css belirleme
    ${props => props.theme === 'dark' && css`
        background: #000;
        padding: 10px;
        border-radius: 10px;
        color: #fff;
        transition: all .3s ease-in-out;
        cursor: pointer;
        &:hover{
            background: #ddd;
            color: #333;
        }
    `}
`