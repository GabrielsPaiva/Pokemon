import React, { useState, useEffect } from "react";

// components
import { getInfo, getPokemon, searchPokemon } from "./Api"
import Pokedex from "./Pokedex";
import Searchbar from "./SearchBar"


export default function Main() {
    const [abilities, setAbilities] = useState(false)
    const [pokemon, setPokemon] = useState(false)
    const [loading, setLoading] = useState(true)
    
    // função pra conectar o search bar com a api
    const onSearchHandler = async (pokemon) => {
        let response = await searchPokemon(pokemon)
        setAbilities(response)
    }

    // função que recebe uma lista de 151 pokemons
    const getPokemons = async () => {
        let data = await getPokemon()
        const info = data.results.map(async(item) => {
            return await getInfo(item.url)
        })
        let response = await Promise.all(info)
        setPokemon(response)
        setLoading(false)
    }

    useEffect(() => {
        getPokemons()
    }, [] )

    const showSearch = () =>{
        if(abilities){
            return(
                <div>
                    <h2>{abilities.name}</h2>
                    <img src={abilities.sprites.front_default} alt=''/>
                </div>
            )
        }
    }
    
    const showAll = () => {
        return(
            <>
            {loading ? <h2>Tá carregando ainda cria...</h2> : <Pokedex pokemon={pokemon}/> }
            </>
        )
    }
    console.log()
    return (
        <>
            <div>
                <Searchbar onSearch={onSearchHandler} />
            </div>
            <div>
                {abilities ? showSearch() : showAll() }
            </div>
        </>
    )
}