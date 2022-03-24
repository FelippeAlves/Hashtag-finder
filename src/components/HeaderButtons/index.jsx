import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import iconAbout from "../../assets/icon-info-circle.svg";
import iconLogin from "../../assets/icon-user-alt.svg";


function HeaderButtons({ showLoginBtn = true }) {
  const [active, setActive] = useState(false)

  const verify = () => {
    const scroll = window.scrollY;
    const height = window.innerHeight;
    if(scroll > (height/1.55)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  window.addEventListener('scroll', verify)

  return (
    <>
      <div className={active ? 'container active' : 'container'}>
        <Link to="/" className="sloganContainer">
          <p className={active ? 'pink' : ''}>hashtag</p>
          <p className={active ? 'sloganFinder pink' : 'sloganFinder'}>finder</p>
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
