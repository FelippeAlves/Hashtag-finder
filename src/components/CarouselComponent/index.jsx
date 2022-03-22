import React from "react";
import './styles.css';
import Carousel from 'react-elastic-carousel';


function CarouselComponent() {

    const Card = ({ number }) => 
    <div className="card"> 
        {/* {number} */}
        <div className="content">
            <p id="postTitle">Postado por:</p>
            <div className="username">
                <p id="userPost">@twitterusername</p> 
            </div> 
        </div>
    </div>

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
                <Card number="1"/>
                <Card number="2"/>
                <Card number="3"/>
                <Card number="4"/>
                <Card number="5"/>
                <Card number="6"/>
                <Card number="7"/>
                <Card number="8"/>
                <Card number="9"/>
                <Card number="10"/>
            </Carousel>
        </div>
       
    </>
}

export default CarouselComponent;