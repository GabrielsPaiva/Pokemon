import React,{useState} from "react"
import styled from "styled-components"
const SearchContainer = styled.div`
    display: flex;
    margin: 0px auto;
    padding: 0 20px;
    align-items: center;
`
const SearchBarInput = styled.div`
background: #fff;
margin-right: 20px;
    input{
        padding: 10px;
        margin-right: 20px;
        box-shadow: 0px 2px 0px 2px rgba(0, 0, 0, 0.25);
        border: none;
        outline: none;
    }
`
const ButtonContainer = styled.div`

`
export default function Searchbar ({onSearch}){
    const [search, setSearch] = useState("ditto")

    const onChangeHandler = (e) =>{
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () =>{
        onSearch(search)
    }
    return(
        <SearchContainer>
            <SearchBarInput>
                <input onChange={(e)=>{onChangeHandler(e)}} placeholder="Buscar pokemon" />
                
            </SearchBarInput>
            <div>
                <button onClick={(e) => {onButtonClickHandler()}}>Buscar</button>
            </div>
        </SearchContainer>
    )
}