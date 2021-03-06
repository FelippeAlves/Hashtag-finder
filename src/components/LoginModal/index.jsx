import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Formik } from "formik";
import * as Yup from "yup";

import "./styles.css";

const LoginModal = () => {
  const navigate = useNavigate();
  const [loginAuth, setLoginAuth] = useState(false);

  const { setIsAuthenticate, isAuthenticate } = useAuth();

  const handleOnSubmit = async (formData) => {
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

    const emailValidate = response.records[0].fields.Email === formData.email;
    const passValidate = response.records[0].fields.Senha === formData.password;

    if (emailValidate && passValidate) {
      setLoginAuth(false);
      setIsAuthenticate(true);
      navigate("/search-listing");
    } else {
      setLoginAuth(true);
    }
  };

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {loginAuth && <span id="msgLogin">Email e Senha incorretos! 😕</span>}
      <div className="containerLogin">
        <h1 className="loginTitle">Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            handleOnSubmit(values);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("*O e-mail está incorreto.")
              .required("*Este campo não pode ser vazio"),
            password: Yup.string().required("*Este campo não pode ser vazio."),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
            } = props;
            return (
              <form id="formLogin" onSubmit={handleSubmit}>
                <div id="firstInput">
                  <input
                    onChange={handleChange}
                    value={values.email}
                    type="text"
                    name="email"
                    className="inputLogin"
                    placeholder="Usuário"
                  />

                  {touched.email && errors.email && (
                    <span className="formError">{errors.email}</span>
                  )}
                </div>
                <div id="secondInput">
                  <input
                    onChange={handleChange}
                    className="inputLogin"
                    value={values.password}
                    type="password"
                    name="password"
                    placeholder="Senha"
                  />
                  {touched.password && errors.password && (
                    <span className="formError">{errors.password}</span>
                  )}
                </div>

                <button type="submit" className="btnSubmit">
                  ACESSAR
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default LoginModal;
