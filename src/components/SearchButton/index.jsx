import React from "react";
import './styles.css';
import iconSearch from '../../assets/icon-search.svg'

function SearchButton() {
    return <>
        <div className="searchContainer">
            <div className="buttonSearch">
                    <img className="iconSearch" src={iconSearch} alt="" />
                    <input className="inputSearch" type="text" placeholder="Buscar..." />
            </div>
        </div>
    </>
}

export default SearchButton;