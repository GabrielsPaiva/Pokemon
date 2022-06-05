import React, { useState, useEffect } from "react";

// components
import { getInfo, getPokemon } from "./Api"
import Pokedex from "./Pokedex";


export default function Main() {
    const [pokemon, setPokemon] = useState(false)
    const [loading, setLoading] = useState(true)

    // função que recebe uma lista de 151 pokemons
    const getPokemons = async () => {
        let data = await getPokemon()
        const info = data.results.map(async (item) => {
            return await getInfo(item.url)
        })
        let response = await Promise.all(info)
        setPokemon(response)
        setLoading(false)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const showAll = () => {
        return (
            <>
                {loading ?
                    <h2>Tá carregando ainda cria...</h2>
                    :
                    <Pokedex pokemon={pokemon} />
                }
            </>
        )
    }

    return (
        <>
            <div>
                {showAll()}
            </div>
        </>
    )
}