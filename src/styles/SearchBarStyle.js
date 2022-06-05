import styled from "styled-components"
import media from "styled-media-query"

export const SearchBarDiv = styled.div`
background-color: whitesmoke;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;

.buttonLink{
        display: flex;
        justify-content: center;
        text-decoration: none;
        width: 12%;
        ${media.lessThan('medium')`
        width: 35%;
        `}
}
`
export const SearchInput = styled.input`
background-color: #2C2C2C;
color: white;
font-size: 22px;
text-align: center;
border: none;
border-radius: 5px;
margin: 0.5em 0 1em 0;
width: 20%;
height: 2em;
outline: none;

${media.lessThan('medium')`
   width: 60%;
`}
`
export const SubmitButton = styled.button`
background-color: white;
font-size: 18px;
text-align: center;
border-radius: 10px;
width: 80%;
line-height: 50px;
transition: all 0.5s ease-in-out;
overflow-x: hidden;
cursor: pointer;

&:hover{
        width: 100%;
        line-height: 50px;
        background-color: white;
        border-radius: 10px;
        cursor: pointer;
        font-size: 18px;
        text-align: center;
        transition: all 0.5s ease-in-out;
}
` 