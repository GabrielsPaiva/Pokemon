import React from "react"
import Logo from "../assets/logo.png"
import styled from "styled-components"

import { Link } from "react-router-dom"

const Nav = styled.nav`
height: 20vh;
display: flex;
justify-content: space-around;
align-items: center;
`

export default function Navbar() {
    return (
        <Nav>
            <div>
                <Link to="/"><img src={Logo} alt='' /></Link>
            </div>
        </Nav>
    )
}