import React, { useState } from "react"

import { searchPokemon } from "./Api"
import Searchbar from "./SearchBar"

export default function PokemonWiki() {
    const [abilities, setAbilities] = useState(false)

   

    const showSearch = () => {
        if (abilities) {
            return (
                <div>
                    <h2>{abilities.name}</h2>
                    <img src={abilities.sprites.front_default} alt='' />
                </div>
            )
        }
    }
    return (
        <>
        <p>Informações do pokemon</p>
        </>
    )
}