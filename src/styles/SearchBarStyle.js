import styled from "styled-components"

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
}
`
export const SearchInput = styled.input`
background-color: #2C2C2C;
color: white;
font-size: 22px;
border: none;
border-radius: 5px;
margin: 0.5em 0 1em 0;
width: 25%;
height: 2em;
outline: none;
`
export const SubmitButton = styled.button`
background-color: white;
font-size: 18px;
text-align: center;
border-radius: 10px;
width: 80%;
line-height: 50px;
transition: all 0.5s ease-in-out;
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