import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <li className="footer-item">
          <Link to="/" className="footer-links">
            Inicio
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/motocicletas" className="footer-links">
            Motocicletas
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/Camionetas" className="footer-links">
            Camionetas
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/automoviles" className="footer-links">
            Automoviles
          </Link>
        </li>
      </div>
      <p className="direction"> Cra 72c #12b-47 Barrio San José de Bavaria</p>
      <div className="footer-credits">
        <p>
          <i className="fas fa-laptop-code"></i> -- This page is for demo
          purposes only by FEMT Developer --
          <i className="fas fa-laptop-code"></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
