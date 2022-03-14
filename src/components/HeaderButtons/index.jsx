import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import iconAbout from '../../assets/icon-info-circle.svg'
import iconLogin from '../../assets/icon-user-alt.svg'

function HeaderButtons () {
    return <>
        <div className="container">
            <Link to="/" className="sloganContainer">
                <p>hashtag</p>
                <p className="sloganFinder">finder</p>
            </Link>
            <nav className="btnContainer">
                <Link to="/sobre" className="btnAbout" >
                    <img className="icons" src={iconAbout} alt="" />
                    <p className="btnLetter">SOBRE</p>
                </Link>
                <div className="btnLogin">
                    <img className="icons" src={iconLogin} alt="" />
                    <p className="btnLetter">LOGIN</p>
                </div>
            </nav>
        </div>
    </>
}

export default HeaderButtons;