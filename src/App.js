import React from "react"
import Navbar from "./components/navBar"
import "./App.css"
import Searchbar from "./components/SearchBar"
import {searchPokemon} from "./components/Api"

const onSearchHandler = async (pokemon) => {
  console.log(pokemon)
}

export default class App extends React.Component{
  render(){
    return(
      <>
     
        <Navbar />
        <Searchbar onSearch={onSearchHandler} />
      </>
    )
  }
}