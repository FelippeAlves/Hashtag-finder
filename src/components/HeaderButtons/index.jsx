import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import iconAbout from "../../assets/icon-info-circle.svg";
import iconLogin from "../../assets/icon-user-alt.svg";
import iconPower from "../../assets/icon-power-off.svg";
import iconHome from "../../assets/icon-home.svg";

import { useAuth } from "../../context/AuthContext";

function HeaderButtons() {
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const [locationNow, setLocationNow] = useState(false);
  const { isAuthenticate, setIsAuthenticate } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      setShowLoginBtn(false);
    }
    if (location.pathname === "/search-listing") {
      setLocationNow(true);
    }
  }, [location]);

  const [active, setActive] = useState(false);

  console.log()

  const verify = () => {
    const scroll = window.scrollY;
    const height = window.innerHeight;
    switch (location.pathname) {
      case '/':
        if (scroll > height / 1.55) {
          setActive(true);
        } else {
          setActive(false);
        }
        break;
      case '/login':
        break;
      case '/search-listing':
        break;
      case '/sobre':
        console.log(scroll);
        if (scroll > height / 3.46) {
          setActive(true);
        } else {
          setActive(false);
        }
        break;
      default:
        break;
    }
    
  };

  window.addEventListener("scroll", verify);

  return (
    <>
      <div className={active ? "container active" : "container"}>
        <Link to="/" className="sloganContainer">
          <p className={active ? "pink" : ""}>hashtag</p>
          <p className={active ? "sloganFinder pink" : "sloganFinder"}>
            finder
          </p>
        </Link>
        <nav className={`${showLoginBtn && "btnContainer"}`}>
          <Link
            to={
              isAuthenticate && !locationNow
                ? "/search-listing"
                : !showLoginBtn || locationNow
                ? "/"
                : "/sobre"
            }
            className="btnAbout"
          >
            <img
              className="icons"
              src={!showLoginBtn || locationNow ? iconHome : iconAbout}
              alt=""
            />

            <p className="btnLetter">
              {isAuthenticate && !locationNow
                ? "BUSCAS"
                : !showLoginBtn || locationNow
                ? "HOME"
                : "SOBRE"}
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
