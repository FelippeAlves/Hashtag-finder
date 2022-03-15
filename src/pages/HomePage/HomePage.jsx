import React from "react";
import HeaderComponent from "../../components/HeaderComponent"
import FooterComponent from "../../components/FooterComponent";
import CarouselComponent from "../../components/CarouselComponent";
import PostComponent from "../../components/PostComponent";

const HomePage = () => {
    return <>
        <HeaderComponent />
        <CarouselComponent />
        <PostComponent />
        <FooterComponent />
    </>
}

export default HomePage;