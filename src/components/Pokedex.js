import React from 'react'

export default function Pokedex({pokemon}) {
    
    console.log(pokemon)
    return(
        <>
        {pokemon ? pokemon.map( (item, id) => (
            <div key={id}>
                <p>{item.name}</p>
            </div>
        )) : ' '}
        </>
    )
}