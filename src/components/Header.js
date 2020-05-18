import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import burger from "../assets/icons/burger.png"

const Header = ({}) => {
    const [collapsed, toggleHeader] = useState(false);
  return (
    <div className="header">
      <ul className={`nav-bar ${collapsed? 'collapsed': ''}`}>
            <li>
              <NavLink
                exact
                className="nav-link"
                activeClassName="selected-link"
                to="/"
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="nav-link"
                activeClassName="selected-link"
                to="/create-event"
              >
                Новое событие
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="nav-link"
                activeClassName="selected-link"
                to="/favorites"
              >
                Избранное
              </NavLink>
            </li>
          </ul>
          <div className="burger"> <img src={burger} onClick={()=>toggleHeader(!collapsed)} /></div>
    </div>
  );
};

export default Header;
