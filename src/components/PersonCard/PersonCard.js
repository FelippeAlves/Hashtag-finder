import React, { Component } from 'react';
import iconEnvelope from './/assets/icon-envelope.svg';
import iconGithub from './/assets/icon-github.svg';
import iconLinkedin from './/assets/icon-linkedin.svg';
import './PersonCard.css';

export default class PersonCard extends Component {
    render() {
        return (
            <div className="personInfoContainer">
                <img className="personInfoImage" src={this.props.personImage} alt="Thauany"/>
                <h3>{this.props.personName}</h3>
                <p className="personDescriptionText">{this.props.personDescription}</p>
                <div className="socialMediaContainer">

                    <a href={this.props.personGithub}>
                        <img className="socialMediaImage" src={iconGithub} alt="Access Github"/>
                    </a>
                    <a href={`mailto:${this.props.personEmail}`}>
                        <img className="socialMediaImage" src={iconEnvelope} alt="Send Email"/>
                    </a>
                    <a href={this.props.personLinkedin}>
                        <img className="socialMediaImage" src={iconLinkedin} alt="Access Linkedin"/>
                    </a>
                </div>
            </div>
        );
    }
}