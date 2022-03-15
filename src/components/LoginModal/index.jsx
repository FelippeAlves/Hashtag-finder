import React from "react";

import "./styles.css";

const LoginModal = () => {
  return (
    <div className="containerLogin">
      <h1 className="loginTitle">Login</h1>
      <form id="formLogin">
        <input
          type="email"
          className="inputLogin"
          placeholder="Usuário"
          required
        />
        <input
          className="inputLogin"
          type="password"
          placeholder="Senha"
          required
        />
        <button className="btnSubmit" onClick={() => alert(`asd`)}>
          ACESSAR
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
