import React, { useState, useEffect } from 'react'
import * as S from "../styles/PokedexStyle"

// images
import waterBackground from "../assets/waterBackground.png"
import grassBackground from "../assets/grassBackground.png"
import fireBackground from "../assets/fireBackground.png"
import generalBackground from "../assets/generalBackground.png"
import favoriteIcon from '../assets/favorite_icon.png'
import redFavoriteIcon from "../assets/favoriteRed_icon.png"

export default function Pokedex({ pokemon }) {
    const [favorite, setFavorite] = useState()

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

    const pokemonFavoriteList = () => {
        let pokemonNames = pokemon.map(item => {
            return { pokemon: item.name, favorite: false }
        })
        setFavorite([...pokemonNames])
    }
    const toggleFavorite = (id) => {
        let newFavorite = [...favorite, favorite[id].favorite ? favorite[id].favorite = false : favorite[id].favorite = true ]
        newFavorite.pop()
        setFavorite([...newFavorite])
    }

    useEffect(() => {
        pokemonFavoriteList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    const pokedexReturn = () => {
        return (
            <S.Div>
                {pokemon ? pokemon.map((item, id) => (
                    <S.CardBox key={id} style={{ backgroundImage: pokemonTypeBackground(item), backgroundPosition: "center center" }}>
                        <S.PokemonInfo>
                            <S.FavoriteIconBox>
                                <S.FavoriteIcon src={!favorite ? favoriteIcon : favorite[id].favorite ? redFavoriteIcon : favoriteIcon} onClick={() => {toggleFavorite(id)}} alt='um circulo com o formato de coração no meio' />
                            </S.FavoriteIconBox>
                            <S.PokemonImage src={item.sprites.front_default} alt={pokemon[0].name} />
                            <S.PokemonName>{item.name}</S.PokemonName>
                        </S.PokemonInfo>
                        <S.PokemonAbilities>
                            <S.AbilitiesBox>
                                {item.abilities.map((item, id) => (
                                    <S.AbilityCard key={id}>
                                        <S.AbilityBackground>
                                            <S.Ability>{item.ability.name}</S.Ability>
                                        </S.AbilityBackground>
                                    </S.AbilityCard>
                                ))}
                            </S.AbilitiesBox>
                            <S.PokemonTypeBox>
                                <S.PokemonTypeBackground style={{ backgroundColor: pokemonTypeColor(item) }}>
                                    <S.PokemonType>{item.types[0].type.name}</S.PokemonType>
                                </S.PokemonTypeBackground>
                            </S.PokemonTypeBox>
                        </S.PokemonAbilities>
                    </S.CardBox>
                )) : ' '}
            </S.Div>
        )
    }

    return (
        <>
            {pokedexReturn()}
        </>
    )
}