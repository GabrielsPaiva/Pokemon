export const searchPokemon = async (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    return response.json()
}