import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form>
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

export default Login;
