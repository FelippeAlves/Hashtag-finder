import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import iconAbout from "../../assets/icon-info-circle.svg";
import iconLogin from "../../assets/icon-user-alt.svg";

function HeaderButtons({ showLoginBtn = true }) {
  return (
    <>
      <div className="container">
        <Link to="/" className="sloganContainer">
          <p>hashtag</p>
          <p className="sloganFinder">finder</p>
        </Link>
        <nav className={`${showLoginBtn && "btnContainer"}`}>
          <Link to="/sobre" className="btnAbout">
            <img className="icons" src={iconAbout} alt="" />
            <p className="btnLetter">SOBRE</p>
          </Link>
          {showLoginBtn && (
            <Link to="/login">
              <div className="btnLogin">
                <img className="icons" src={iconLogin} alt="" />
                <p className="btnLetter">LOGIN</p>
              </div>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}

export default HeaderButtons;
