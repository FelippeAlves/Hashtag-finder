import React, { useEffect, useState } from "react";
import './styles.css';
import Carousel from 'react-elastic-carousel';


function CarouselComponent({props}) {   

    const [state, setState] = useState([])
    
    const card = state.map((images) => 
        <div className="card" style={{backgroundImage: `url(${images.url ? images.url : images.preview_image_url})`}}>
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
    },[props])

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
           width: 1200, itemsToShow: 4 
        },
    ]

    return <>
        
        <div className="carouselContainer">
            <Carousel breakPoints={breakPoints}>
                {card}
            </Carousel>
        </div>
       
    </>
}

export default CarouselComponent;