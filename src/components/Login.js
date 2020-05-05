import React from "react";

function Login(props) {
  return (
    <section
      className="profile-container padding-top-lg"
      style={{ height: "-webkit-fill-available" }}
    >
      <div>
        <div className="margin-bottom-sm">
          <p className="title-font margin-bottom-lg margin-top-lg text-center">
            Inicia Sesión
        </p>
        </div>
        <div className="profile-info">
          <div className="profile-inputs">
            Usuario: <input type="text" />
            Contraseña: <input type="password" />
            <button
              className="button-tour margin-top-sm"
              style={{ alignSelf: "center", width: "50%" }}
              type="submit"
              name="button"
            >
              Enviar
          </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Login;