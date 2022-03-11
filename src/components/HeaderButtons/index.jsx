import React from "react";
import './styles.css';
import iconAbout from '../../assets/icon-info-circle.svg'
import iconLogin from '../../assets/icon-user-alt.svg'

function HeaderButtons () {
    return <>
        <div className="container">
            <div className="sloganContainer">
                <p>hashtag</p>
                <p className="sloganFinder">finder</p>
            </div>
            <nav className="btnContainer">
                <div className="btnAbout">
                    <img className="icons" src={iconAbout} alt="" />
                    <p className="btnLetter">SOBRE</p>
                </div>
                <div className="btnLogin">
                    <img className="icons" src={iconLogin} alt="" />
                    <p className="btnLetter">LOGIN</p>
                </div>
            </nav>
        </div>
    </>
}

export default HeaderButtons;