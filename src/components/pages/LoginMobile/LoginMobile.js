import React from "react";
import "./LoginMobile.css";

const LoginMobile = () => {
  return (
    <div className="login-container--mobile">
      <form className="login-container--mobile-form">
        <div className="login-user">
          <label htmlFor="user">Usuario</label>
          <input type="text" placeholder="Usuario" />
        </div>
        <div className="login-password">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button>Ingresar</button>
      </form>
    </div>
  );
};
export default LoginMobile;
