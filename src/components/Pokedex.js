import React from 'react'

// images
import waterBackground from "../assets/waterBackground.png"
import grassBackground from "../assets/grassBackground.png"
import fireBackground from "../assets/fireBackground.png"
import generalBackground from "../assets/generalBackground.png"
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 15px;
height: fit-content;
`
const CardBox = styled.div`
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
const PokemonInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 8px;
width: 42%;
height: 100%;
`
const PokemonImage = styled.img`

`
const PokemonName = styled.p`
color: white;
font-size: 14px;
text-transform: uppercase;
`
const PokemonAbilities = styled.div`
display: flex;
flex-direction: column-reverse;
justify-content: space-between;
align-items: center;
width: 50%;
`
const PokemonTypeBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50%;
`
const PokemonTypeBackground = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
width: 60%;
height: 50%;
`
const PokemonType = styled.h2`
font-size: 14px;
text-transform: uppercase;
`
const AbilitiesBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: space-between;
width: 100%;
`
const AbilityCard = styled.div`
display: flex;
justify-content: space-evenly;
align-items: space-between;
margin-bottom: 2px;
width:  60%;
height: fit-content;
`
const AbilityBackground = styled.div`
background-color: green;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5px;
border-radius: 2px;
width: 95%;
height: 100%;
`
const Ability = styled.p`
color: white;
font-size: 9px;
font-weight: 700px;
text-align: center;
text-transform: uppercase;
`


export default function Pokedex({ pokemon }) {

    const pokemonTypeColor = (item) => {
        if (item.types[0].type.name === "grass") {
            return "#7c5"
        } else if (item.types[0].type.name === "water") {
            return "#3399FF"
        } else if (item.types[0].type.name === "ground") {
            return "#DDBB55"
        } else if (item.types[0].type.name === "rock") {
            return "#BBAA66"
        } else if (item.types[0].type.name === "fire") {
            return "#FF4422"
        } else if (item.types[0].type.name === "electric") {
            return "#FFCC33"
        } else if (item.types[0].type.name === "poison") {
            return "#AA5599"
        } else if (item.types[0].type.name === "dragon") {
            return "#8899FF"
        } else if (item.types[0].type.name === "bug") {
            return "#AABB22"
        } else if (item.types[0].type.name === "normal") {
            return "#797964"
        } else if (item.types[0].type.name === "ice") {
            return "#66CCFF"
        } else if (item.types[0].type.name === "fighting") {
            return "#A84D3D"
        } else if (item.types[0].type.name === "psychic") {
            return "#FF227A"
        } else if (item.types[0].type.name === "ghost") {
            return "#5454B3"
        } else if (item.types[0].type.name === "fairy") {
            return "#EE99EE"
        }
    }
    const pokemonTypeBackground = (item) => {
        if (item.types[0].type.name === "grass") {
            return `url(${grassBackground})`
        } else if (item.types[0].type.name === "water") {
            return `url(${waterBackground})`
        } else if (item.types[0].type.name === "fire") {
            return `url(${fireBackground})`
        } else {
            return `url(${generalBackground})`
        }
    }

    console.log(pokemon[0])
    return (
        <Div>
            {pokemon ? pokemon.map((item, id) => (
                <CardBox key={id} style={{ backgroundImage: pokemonTypeBackground(item), backgroundPosition: "center center" }}>
                    <PokemonInfo>
                        <PokemonImage src={item.sprites.front_default} alt={pokemon[0].name} />
                        <PokemonName>{item.name}</PokemonName>
                    </PokemonInfo>
                    <PokemonAbilities>
                        <AbilitiesBox>
                            {item.abilities.map((item, id) => (
                                <AbilityCard key={id}>
                                    <AbilityBackground>
                                        <Ability>{item.ability.name}</Ability>
                                    </AbilityBackground>
                                </AbilityCard>
                            ))}
                        </AbilitiesBox>
                        <PokemonTypeBox>
                            <PokemonTypeBackground style={{ backgroundColor: pokemonTypeColor(item) }}>
                                <PokemonType>{item.types[0].type.name}</PokemonType>
                            </PokemonTypeBackground>
                        </PokemonTypeBox>
                    </PokemonAbilities>
                </CardBox>
            )) : ' '}
        </Div>
    )
}



// {pokemon ? pokemon.map( (item, id) => (
//     <div key={id}>
//         <p>{item.name}</p>
//     </div>
// )) : ' '}