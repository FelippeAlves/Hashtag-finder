import React from "react";
import './styles.css';
import iconSearch from '../../assets/icon-search.svg';
import { useNavigate } from "react-router-dom";

function SearchButton() {

    const navigate = useNavigate()

    const onSearch = (event) => {
        if(event.key === 'Enter'){
            navigate(`/search-listing?search=${event.target.value}`)
        }
    }

    return <>
        <div className="searchContainer">
            <div className="buttonSearch">
                    <img className="iconSearch" src={iconSearch} alt="" />
                    <input className="inputSearch" type="text" onKeyUp={onSearch} placeholder="Buscar..." />
            </div>
        </div>
    </>
}

export default SearchButton;