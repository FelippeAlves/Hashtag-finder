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

        const apiSquad = `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?&filterByFormula=`+encodeURI(`{Squad} = '1'`);
        const responseSquad = await fetch(apiSquad, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM',
                'Content-Type': 'application/json'
            }});
        const bodySquad = await responseSquad.json();
        console.log(bodySquad);
        this.setState({squadInfo: bodySquad.records, isLoaded: true});
        console.log(this.state.squadInfo[0].fields)
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

                        { this.state.isLoaded ? 
                        
                        
                        <PersonCard personImage={this.state.squadInfo[0].fields.Imagem[0].url} personName={this.state.squadInfo[0].fields.Nome}
                                                            personEmail={this.state.squadInfo[0].fields.Email}
                                                            personLinkedin={this.state.squadInfo[0].fields.LinkedIn}
                                                            personGithub={this.state.squadInfo[0].fields.Github}
                                                            personDescription={this.state.squadInfo[0].fields['Descrição']}/>
                        
                        : <div> </div>
                    
                        }

                        { this.state.isLoaded ? 
                        
                        
                        <PersonCard personImage={this.state.squadInfo[1].fields.Imagem[0].url} personName={this.state.squadInfo[1].fields.Nome}
                                                            personEmail={this.state.squadInfo[1].fields.Email}
                                                            personLinkedin={this.state.squadInfo[1].fields.LinkedIn}
                                                            personGithub={this.state.squadInfo[1].fields.Github}
                                                            personDescription={this.state.squadInfo[1].fields['Descrição']}/>
                        
                        : <div> </div>
                    
                        }



                        { this.state.isLoaded ? 

                        <PersonCard personImage={this.state.squadInfo[2].fields.Imagem[0].url} personName={this.state.squadInfo[2].fields.Nome}
                                                            personEmail={this.state.squadInfo[2].fields.Email}
                                                            personLinkedin={this.state.squadInfo[2].fields.LinkedIn}
                                                            personGithub={this.state.squadInfo[2].fields.Github}
                                                            personDescription={this.state.squadInfo[2].fields['Descrição']}/>
                        
                        : <div> </div>
                    
                        }

                        { this.state.isLoaded ? 

                        <PersonCard personImage={this.state.squadInfo[3].fields.Imagem[0].url} personName={this.state.squadInfo[3].fields.Nome}
                                                            personEmail={this.state.squadInfo[3].fields.Email}
                                                            personLinkedin={this.state.squadInfo[3].fields.LinkedIn}
                                                            personGithub={this.state.squadInfo[3].fields.Github}
                                                            personDescription={this.state.squadInfo[3].fields['Descrição']}/>

                        : <div> </div>

                        }
                    </div>

                </div>
                <FooterComponent/>
            </div>
        );
    }
}