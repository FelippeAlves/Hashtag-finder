import React from "react";
import './styles.css';
import HeaderButtons from "../HeaderButtons/index"
import SearchButton from "../SearchButton/index"


function Header() {
    return <>
        <header className="headerContainer">
            <HeaderButtons />
            <div className="titleContainer">
                <h1>Encontre hashtags de maneira fácil.</h1>
            </div>
            <div className="subTitleContainer">
                <p>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</p>
            </div>
        </header>
        <SearchButton />
    </>
}

export default Header;