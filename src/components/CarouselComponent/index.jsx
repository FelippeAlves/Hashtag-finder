import React from "react";
import './styles.css';
import Carousel from 'react-elastic-carousel';


function CarouselComponent({props}) {   

    const card = props.images.map((images) => 
        <div className="card" style={{backgroundImage: `url(${images.url ? images.url : images.preview_image_url})`}}>
             <div className="content">
                <p id="postTitle"></p>
                <div className="username">
                    <p id="userPost"></p> 
                </div> 
            </div>
        </div>
    )    

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