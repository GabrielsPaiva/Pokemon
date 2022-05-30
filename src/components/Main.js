import React, { useState } from "react";

// components
import { searchPokemon } from "./Api"
import Searchbar from "./SearchBar"


export default function Main() {
    const [abilities, setAbilities] = useState('')

    const onSearchHandler = async (pokemon) => {
        let response = await searchPokemon(pokemon)
        setAbilities(response)
    }

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
            <h1>Achamo nada meu truta</h1>
            </>
        )
    }
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