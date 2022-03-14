import React, { Component } from 'react';
import './About.css';
import bgIllustration from './/assets/about-illustration.svg';
import thauImage from './/assets/thau.jpg';
import PersonCard from '../../components/PersonCard/PersonCard';
import FooterComponent from '../../components/FooterComponent/index';
import HeaderButtons from '../../components/HeaderButtons/index';
export default class About extends Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="projectHeaderContainer">
                    <HeaderButtons/>
                    <h1 className="aboutProjectText">Sobre o projeto</h1>
                </div>
                <div className="whatIsContainer">
                    <div className="whatIsInfo">
                        <h2 className="whatIsTitle">O que é</h2>
                        <div class="whatIsText">
                            <p >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
                            </p>
                        </div>
                    </div>
                    <div className="whatIsImageContainer">
                        <img className="whatIsImage" src={bgIllustration} alt="People looking around"/>
                    </div>
                </div>
                <div className="aboutUsContainer">
                    <h2 className="whatIsTitle">Quem Somos</h2>
                    <div className="peopleContainer"> 
                        <PersonCard personImage={thauImage} personName="Thauany Moedano" personDescription="Head de Desenvolvimento, Thauany tem 5 anos de 
                                                                                                        experiência e programação e está aprendendo React"/>
                        <PersonCard personImage={thauImage} personName="Thauany Moedano" personDescription="Head de Desenvolvimento, Thauany tem 5 anos de 
                                                                                                        experiência e programação e está aprendendo React"/>
                        <PersonCard personImage={thauImage} personName="Thauany Moedano" personDescription="Head de Desenvolvimento, Thauany tem 5 anos de 
                                                                                                        experiência e programação e está aprendendo React"/>
                        <PersonCard personImage={thauImage} personName="Thauany Moedano" personDescription="Head de Desenvolvimento, Thauany tem 5 anos de 
                                                                                                        experiência e programação e está aprendendo React"/>
                    </div>

                </div>
                <FooterComponent/>
            </div>
        );
    }
}