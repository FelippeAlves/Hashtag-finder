import React, { Component } from 'react';
import './About.css';
import bgIllustration from './/assets/about-illustration.svg';
import thauImage from './/assets/thau.jpg';
import felippeImage from './/assets/felippe.jpg';
import alekissImage from './/assets/alekiss.jpg';
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
                        <PersonCard personImage={thauImage} personName="Thauany Moedano"
                                                            personEmail="thauany.moedano@zappts.com.br"
                                                            personLinkedin="https://www.linkedin.com/in/tmoedano/"
                                                            personGithub="https://github.com/t-moedano"
                                                            personDescription="Head de Desenvolvimento, Thauany tem 5 anos de 
                                                                                experiência e programação e está aprendendo React"/>
                        <PersonCard personImage={felippeImage} personName="Felipe Alves"
                                                            personEmail="felippe.paula@zappts.com.br"
                                                            personLinkedin="https://www.linkedin.com/in/felippe-alves-de-paula/"
                                                            personGithub="https://github.com/FelippeAlves/"
                                                            personDescription="Estudando de ADS e desenvolvedor frontend"/>
                        <PersonCard personImage={alekissImage} personName="Álekiss Melo"
                                                            personEmail="alekiss.melo@dcx.ufpb.br"
                                                            personLinkedin="https://www.linkedin.com/in/alekissmelo/"
                                                            personGithub="https://github.com/alekiss"
                                                            personDescription="Desenvolvedor Frontend na Zappts"/>
                        <PersonCard personImage={thauImage} personName="Thauany Moedano"
                                                            personEmail="thauany.moedano@zappts.com.br"
                                                            personLinkedin="https://www.linkedin.com/in/tmoedano/"
                                                            personGithub="https://github.com/t-moedano"
                                                            personDescription="Head de Desenvolvimento, Thauany tem 5 anos de 
                                                                                experiência e programação e está aprendendo React"/>
                    </div>

                </div>
                <FooterComponent/>
            </div>
        );
    }
}