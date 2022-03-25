import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import iconAbout from "../../assets/icon-info-circle.svg";
import iconLogin from "../../assets/icon-user-alt.svg";
import iconPower from "../../assets/icon-power-off.svg";

import { useAuth } from "../../context/AuthContext";

function HeaderButtons() {
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const { isAuthenticate, setIsAuthenticate } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      setShowLoginBtn(false);
    } else {
      setShowLoginBtn(true);
    }
  }, [location]);

  return (
    <>
      <div className="container">
        <Link to="/" className="sloganContainer">
          <p>hashtag</p>
          <p className="sloganFinder">finder</p>
        </Link>
        <nav className={`${showLoginBtn && "btnContainer"}`}>
          <Link
            to={isAuthenticate || !showLoginBtn ? "/" : "/sobre"}
            className="btnAbout"
          >
            <img className="icons" src={iconAbout} alt="" />
            <p className="btnLetter">
              {isAuthenticate || !showLoginBtn ? "HOME" : "SOBRE"}
            </p>
          </Link>
          {showLoginBtn && (
            <Link to={isAuthenticate ? "" : "/login"}>
              <div
                className="btnLogin"
                onClick={() => {
                  isAuthenticate && setIsAuthenticate(false);
                }}
              >
                {isAuthenticate ? (
                  <img className="icons" src={iconPower} alt="ícone power" />
                ) : (
                  <img className="icons" src={iconLogin} alt="icone Login" />
                )}
                <p className="btnLetter">{isAuthenticate ? "SAIR" : "LOGIN"}</p>
              </div>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}

export default HeaderButtons;
