import React, { useEffect, useState } from "react";
import './styles.css';
import iconSearch from '../../assets/icon-search.svg';
import { FindHashContext } from "../../providers/findHash"
import CarouselComponent from "../CarouselComponent"
import PostComponent from "../PostComponent"
import searchTweets from '../../service/searchTweets'
import searchImages from '../../service/searchImages'


function SearchButton() {

    const { word, setWord } = React.useContext(FindHashContext);
    const [text, setText] = useState([]);
    const [users, setUsers] = useState([]);
    const [images, setImages] = useState([]);
    const [author, setAuthor] = useState([]);
    const [data, setData] = useState([]);
    const [invalidField, setInvalidField] = useState(false);
    
    useEffect( () => {
        fetchPost(word)
    }, [word])

    async function handleSearch(word) {
        const correctWord = word.replace('#', '')
        await setWord(correctWord)

    }

    async function fetchPost (word) {
        await searchTweets(word).then(data => {
            setText(data.data)
            setUsers(data.includes.users)
        }); 

        await searchImages(word).then(images => {
            setData(images.data);
            setImages(images.includes.media);
            setAuthor(images.includes.users);
        })
    }    

    const onSearch = (event) => {
        if(event.key === 'Enter'){
            if(event.target.value === ''){
                let field = document.getElementById('search');
                field.classList.add('alert');
                setInvalidField(true)
            } else {
                handleSearch(event.target.value)
                setInvalidField(false)
            }
        }
    }

    return <>
        <div className="searchContainer">
            <div className="buttonSearch" id="search">
                    <img className="iconSearch" src={iconSearch} alt="" />
                    <input className="inputSearch" type="text" onKeyUp={onSearch} placeholder="Buscar..." />
            </div>
        </div>
            <div className="invalidField" style={{display: `${invalidField ? 'flex' : 'none'}`}}>
                <p>É obrigatório preecher o campo de busca</p>
            </div>
        <h1 className="titleCarousel"> Exibindo os 10 resultados mais recentes para #{word} </h1>
        <CarouselComponent props={{ images, author, data }} />
        <PostComponent props={{word, text, users}} />
    </>
}

export default SearchButton;