import React, { Component } from 'react';
import './About.css';
import bgIllustration from './/assets/about-illustration.svg';
import thauImage from './/assets/thau.jpg';
import felippeImage from './/assets/felippe.jpg';
import alekissImage from './/assets/alekiss.jpg';
import pedroImage from './/assets/pedro.jpg';
import PersonCard from '../../components/PersonCard/PersonCard';
import FooterComponent from '../../components/FooterComponent/index';
import HeaderButtons from '../../components/HeaderButtons/index';
export default class About extends Component {

    state = {
        about: []
    }

    async componentDidMount() {
        const api = `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?fields%5B%5D=Sobre&filterByFormula=`+encodeURI(`{Squad} = '1'`);
        console.log(api);
        const response = await fetch(api, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM',
                'Content-Type': 'application/json'
            }});
        const body = await response.json();
        this.setState({about: body.records[0].fields.Sobre})

    }

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
                        <div className="whatIsText">
                            <p >
                            {this.state.about}
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
                        <PersonCard personImage={pedroImage} personName="Pedro Lima"
                                                            personEmail="phlimas@outlook.com"
                                                            personLinkedin="https://www.linkedin.com/in/pedro-lima-b2a2b81a7/"
                                                            personGithub=" https://github.com/PedroLimass"
                                                            personDescription="Estudando de engenharia de software e desenvolvedor frontend"/>
                    </div>

                </div>
                <FooterComponent/>
            </div>
        );
    }
}