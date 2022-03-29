import React, { Component } from 'react';
import './About.css';
import bgIllustration from './/assets/about-illustration.svg';
import PersonCard from '../../components/PersonCard/PersonCard';
import FooterComponent from '../../components/FooterComponent/index';
import HeaderButtons from '../../components/HeaderButtons/index';
export default class About extends Component {

    state = {
        about: [],
        squadInfo: [],
        isLoaded: false
    }

    async componentDidMount() {
        const api = `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?fields%5B%5D=Sobre&filterByFormula=`+encodeURI(`{Squad} = 'Z01'`);
        const response = await fetch(api, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM',
                'Content-Type': 'application/json'
            }});
        const body = await response.json();
        this.setState({about: body.records[0].fields.Sobre})

        const apiSquad = `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?&filterByFormula=`+encodeURI(`{Squad} = 'Z01'`);
        const responseSquad = await fetch(apiSquad, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM',
                'Content-Type': 'application/json'
            }});
        const bodySquad = await responseSquad.json();
        this.setState({squadInfo: bodySquad.records, isLoaded: true});
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

                        { this.state.isLoaded ? this.state.squadInfo.map((item) =>                         
                                                            <PersonCard personImage={item.fields.Imagem[0].url} personName={item.fields.Nome}
                                                            personEmail={item.fields.Email}
                                                            personLinkedin={item.fields.LinkedIn}
                                                            personGithub={item.fields.Github}
                                                            personDescription={item.fields['Descrição']}/>) : <div></div> }
                        
                        
                    </div>

                </div>
                <FooterComponent/>
            </div>
        );
    }
}