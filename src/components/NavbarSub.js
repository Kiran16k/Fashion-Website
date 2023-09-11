import React from "react";
import { Link } from "react-router-dom";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { NavbarData } from "../Utils/Data";
import Search from "./Search";

const NavbarSub = () => {
  return (
    <div className="navbarSub-main">
      <div className="navbarSub-logo">
        <Link to="/">
          <img
            className="navbarSub-logo-logo"
            width="200"
            height="90"
            src="https://flatsome3.uxthemes.com/wp-content/themes/flatsome/assets/img/logo.png"
            alt="Flatsome"
          />
        </Link>
      </div>
      <div className="navbarSub-list">
        <ul className="navbarSub-ul-list">
          <Search />
          {NavbarData.map((link, index) => (
            <li key={index}>
              <Link to={link.href} className="navbarSub-link">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbarSub-login">
        <ul className="navbarSub-login-list">
          <li>
            <Link to="/" className="navbarSub-link">
              Login
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/" className="navbarSub-link">
              Cart /$0.00
              <WorkOutlineIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarSub;
