// carregar quando buscar
export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log('searchPokemon error:', error)
    }
}

// Pokedex da Landing Page
export const getPokemon = async (limit = 151, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log('getPokemon error:', error)
    }
}

// Função que recebe o número do pokemon e pega suas informação
export const getInfo = async (pokemon) => {
    try {
        let url = `${pokemon}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log('getPokemon error:', error)
    }
}
export const getDescription = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
        const response = await fetch(url)
        console.log(response)
        return response.json()
    } catch (error) {
        console.log('getPokemon error:', error)
    }
}