import React, { useEffect, useState } from "react";
import './styles.css';
import Carousel from 'react-elastic-carousel';
import { HashLoader } from "react-spinners";


function CarouselComponent({props}) {   

    const [state, setState] = useState([]);
    const [modalImg, setModalImg] = useState();
    const [activeModal, setActiveModal] = useState(false);
    const [loarder, setLoader] = useState(false);
    
    const card = state.map((images, index) => 
        <div className="card" key={index} onClick={(e) => handleClick(e.target.style.backgroundImage.replace('url("', ''))} style={{backgroundImage: `url(${images.url ? images.url : images.preview_image_url})`}}>
             <div className="content">
                <p id="postTitle">{images.name}</p>
                <div className="username">
                    <p id="userPost">@{images.username}</p> 
                </div> 
            </div>
        </div>
    )
    
    function handlingData() {
        let array = [];
        for(let i = 0; i < props.data.length; i++) {
            let media_key = props.data[i].attachments.media_keys[0];
            let author_id = props.data[i].author_id
            let url
            let author_name
            let author_username
            for(let x = 0; x < props.images.length; x++) {
                if(props.images[x].media_key === media_key){
                    url = props.images[x].url ? props.images[x].url : props.images[x].preview_image_url 
                }
            }
            for(let y = 0; y < props.author.length; y++) {
                if(props.author[y].id === author_id){
                    author_name = props.author[y].name
                    author_username = props.author[y].username
                }
            }
            array.push({
                name: author_name,
                username: author_username,
                url: url,
            })
        }
        return array;
    }

    useEffect(() => {
        if(props.data !== undefined) {
            let array = handlingData()
            setState(array); 
        }
    },[])

    const breakPoints = [
        {
           width: 1, itemsToShow: 2.2
        },
        {
           width: 500, itemsToShow: 2 
        },
        {
           width: 768, itemsToShow: 3 
        },
        {
           width: 1200, itemsToShow: 5 
        },
    ]

    function desactiveModal(event) {
        let div = document.querySelectorAll('.modal');
        let button = document.querySelectorAll('#buttonClose');
        if(event === div[0] || event === button[0]) {
            setActiveModal(false)
            setLoader(false)
        }
    }

    window.addEventListener('click', (e) => {desactiveModal(e.target)});

    function handleClick(image) {
        let newImage = image.replace('")', '')
        setModalImg(newImage);
        setActiveModal(true);
        setTimeout(() => {setLoader(true);}, 500)
         
    }

    return <>
        
        <div className="carouselContainer">
            <Carousel breakPoints={breakPoints}>
                {card}
            </Carousel>
            { activeModal ? 

                <div className="modal">
                    {
                        loarder ? 

                        <div className="modalContent">
                            <img className="modalContainer" src={modalImg} alt="imagem do twitter"/>
                        </div>

                        : 
                        
                        <div className="loaderContainer">
                            <HashLoader color="#6A36D7" />
                        </div>
                    }
                    <span id="buttonClose">&times;</span>
                </div>
               
            

            : ''
            
            }
        </div>
       
    </>
}

export default CarouselComponent;