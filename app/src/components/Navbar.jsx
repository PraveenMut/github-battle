import * as React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { sunIcon, moonIcon } from "../../icon";

const Navbar = (props) => (
  <nav className="split">
    <NavLink
      to="/"
      className={({ isActive }) => `nav-link ${(isActive && " active")}`}
    >
      GitHub Battle
    </NavLink>
    <ul className="row">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${(isActive && " active")}`}
        >
          Popular
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/battle"
          className={({ isActive }) => `nav-link ${(isActive && " active")}`}
        >
          Battle
        </NavLink>
      </li>
      <li>
        <button className="btn secondary icon" onClick={props.toggleTheme}>
          {props.theme === "light" ? moonIcon : sunIcon}
        </button>
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  theme: PropTypes.string,
  toggletheme: PropTypes.func,
};

export default Navbar;
