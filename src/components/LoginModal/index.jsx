import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./styles.css";

const LoginModal = () => {
  const navigate = useNavigate();

  const { setIsAuthenticate } = useAuth();
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const api =
      `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=3&view=Grid%20view&filterByFormula=` +
      encodeURI(`{Squad} = '1'`);
    const response = await fetch(api, {
      method: "GET",
      headers: {
        Authorization: "Bearer key2CwkHb0CKumjuM",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    const emailValidate =
      response.records[0].fields.Email === event.target.email.value;
    const passValidate =
      response.records[0].fields.Senha === event.target.senha.value;

    //Aqui existe apenas para poder pegar as credenciais e testasr XD
    console.log(response.records[0].fields);

    if (emailValidate && passValidate) {
      setIsAuthenticate(true)
      navigate("/");
    }
  };

  return (
    <div className="containerLogin">
      <h1 className="loginTitle">Login</h1>
      <form id="formLogin" onSubmit={handleOnSubmit}>
        <input
          type="email"
          name="email"
          className="inputLogin"
          placeholder="Usuário"
          required
        />
        <input
          className="inputLogin"
          name="senha"
          type="password"
          placeholder="Senha"
          required
        />
        <button type="submit" className="btnSubmit">
          ACESSAR
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
