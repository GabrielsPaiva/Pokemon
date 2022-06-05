import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// components
import Main from "./components/Main"
import Navbar from "./components/navBar"
import PokemonWiki from "./components/PokemonWiki"
import Searchbar from "./components/SearchBar"
import { searchPokemon } from "./components/Api"

// styles
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
`


export default class App extends React.Component {

    // função pra conectar o search bar com a api
    onSearchHandler = async (pokemon) => {
      let response = await searchPokemon(pokemon)
      return response
  }

  render() {
    return (
      <Router>
        <GlobalStyle />
        <Navbar />
        <Searchbar onSearch={this.onSearchHandler} />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="wiki" element={<PokemonWiki />} />
        </Routes>
      </Router>
    )
  }
}