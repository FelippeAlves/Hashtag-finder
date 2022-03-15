import React from "react";
import HeaderButtons from "../../components/HeaderButtons";
import LoginModal from "../../components/LoginModal";
import "./styles.css";

const Login = () => {
  return (
    <>
      <div className="containerLoginScreen">
        <HeaderButtons showLoginBtn={false}/>
        <LoginModal />
      </div>
    </>
  );
};

export default Login;
