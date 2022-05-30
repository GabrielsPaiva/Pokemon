import React, { useState } from "react"
import * as S from "../styles/SearchBarStyle"

export default function Searchbar({ onSearch }) {
    const [search, setSearch] = useState("")

    const onChangeHandler = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    const onButtonClickHandler = () => {
        if (search.length >= 1) {
            onSearch(search)
        }
    }
    return (
        <S.SearchBarDiv>
            <S.SearchInput onChange={(e) => { onChangeHandler(e) }} placeholder="Buscar pokemon" />
            <S.SubmitButton onClick={() => { onButtonClickHandler() }}>Buscar</S.SubmitButton>
        </S.SearchBarDiv>
    )
}