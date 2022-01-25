import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { MenuItems } from "../Menuitems";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(false);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
