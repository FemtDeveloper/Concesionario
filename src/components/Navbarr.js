import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./navbar.css";
import Dropdown from "./Dropdown";
import Login from "./Login";
import logo from "../imags/motogp.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handlerClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const [dropdown, setDropdown] = useState(false);
  const [login, setLogin] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 760) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 760) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnterLog = () => {
    if (window.innerWidth < 760) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };
  const onMouseLeaveLog = () => {
    if (window.innerWidth < 760) {
      setLogin(false);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-img">
          <img src={logo} alt="moto-gp" />
        </Link>

        <div className="menu-icon" onClick={handlerClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={click ? "nav-menu active" : "nav-menu"}
          onClick={onMouseLeaveLog}
        >
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/motocicletas"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Motocicletas <i className="fas fa-caret-down"></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/Camionetas"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Camionetas
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/automoviles"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Automoviles
            </Link>
          </li>
          <li className="nav-item">
            <h2
              // to="/ingresar"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Ingresar
            </h2>
          </li>
          {login && <i className="far fa-times-circle fa-color"></i>}
        </ul>
        {
          <li className="nav-item" onClick={onMouseEnterLog}>
            <Button className="btn" />
          </li>
        }
        {login && <Login />}
      </div>
    </>
  );
};

export default Navbar;
