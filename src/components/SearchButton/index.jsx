import React, { useEffect, useState } from "react";
import './styles.css';
import iconSearch from '../../assets/icon-search.svg';
/* import { useNavigate } from "react-router-dom"; */
import { FindHashContext } from "../../providers/findHash"
import CarouselComponent from "../CarouselComponent"
import PostComponent from "../PostComponent"
import searchTweets from '../../service/searchTweets'


function SearchButton() {

    const { word, setWord } = React.useContext(FindHashContext);
    const [text, setText] = useState([]);
    const [users, setUsers] = useState([]);
    
    /* const navigate = useNavigate() */
    useEffect( () => {
        fetchPost(word)
        console.log('ativando')
    }, [word])

    async function fetchPost (word) {
        await searchTweets(word).then(data => {
            setText(data.data)
            setUsers(data.includes.users)
        }); 
    }


    async function handleSearch(word) {
        await setWord(word)

    }
    

    const onSearch = (event) => {
        if(event.key === 'Enter'){
            /* navigate(`/search-listing?search=${event.target.value}`) */
            handleSearch(event.target.value)
            
        }
    }

    return <>
        <div className="searchContainer">
            <div className="buttonSearch">
                    <img className="iconSearch" src={iconSearch} alt="" />
                    <input className="inputSearch" type="text" onKeyUp={onSearch} placeholder="Buscar..." />
            </div>
        </div>
        <h1 className="titleCarousel"> Exibindo os 10 resultados mais recentes para #{word} </h1>
        <CarouselComponent />
        <PostComponent props={{word, text, users}} />
    </>
}

export default SearchButton;