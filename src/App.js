import React from "react"
import Main from "./components/Main"
import Navbar from "./components/navBar"

// styles
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`


export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Main />
      </>
    )
  }
}