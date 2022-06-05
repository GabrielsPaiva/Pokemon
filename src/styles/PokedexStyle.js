import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 15px;
height: fit-content;
`
export const CardBox = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid #000;
border-radius: 10px;
margin: 10px 10px 0 0;
width: 260px;
height: 120px;
cursor: pointer;
-moz-transition: all 0.5s;
-webkit-transition: all 0.5s;
transition: all 0.5s;
&:hover{
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
}
`
export const PokemonInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 2px;
width: 48%;
height: 100%;
`
export const FavoriteIconBox = styled.div`
display: flex;
margin-top: 0.1em;
width: 100%;
height: 1em;

`
export const FavoriteIcon = styled.img`
width: 12%;
`
export const PokemonImage = styled.img`
width: 70%;
`
export const PokemonName = styled.p`
color: white;
font-size: 11px;
text-transform: uppercase;
`
export const PokemonAbilities = styled.div`
display: flex;
flex-direction: column-reverse;
justify-content: space-between;
align-items: center;
width: 50%;
`
export const PokemonTypeBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50%;
`
export const PokemonTypeBackground = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
width: 60%;
height: 50%;
`
export const PokemonType = styled.h2`
font-size: 14px;
text-transform: uppercase;
`
export const AbilitiesBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: space-between;
width: 100%;
`
export const AbilityCard = styled.div`
display: flex;
justify-content: space-evenly;
align-items: space-between;
margin-bottom: 2px;
width:  60%;
height: fit-content;
`
export const AbilityBackground = styled.div`
background-color: green;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5px;
border-radius: 2px;
width: 95%;
height: 100%;
`
export const Ability = styled.p`
color: white;
font-size: 9px;
font-weight: 700px;
text-align: center;
text-transform: uppercase;
`