import React from "react";
import "../CSS/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebookSquare,
  FaHeart,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { linksData } from "../Utils/Data";

const Navbar = () => {
  return (
    <header>
      <div className="navbar-top-header">
        <div className="navbar-top-left">
          <strong className="uppercase">
            Add anything here or just remove it....
          </strong>
        </div>
        <div className="navbar-top-right">
          {linksData.map((link, index) => (
            <React.Fragment key={index}>
              <Link to={link.href} className="navbar-top-right-link">
                {link.text === "Newsletter" && (
                  <FontAwesomeIcon icon={faEnvelope} />
                )}
                {link.text}
              </Link>
              {index < linksData.length - 1 && (
                <span className="separator">|</span>
              )}
            </React.Fragment>
          ))}
          <FaHeart color="white" />
          <FaFacebookSquare color="white" />
          <FaInstagram color="white" />
          <FaTwitter color="white" />
          <FontAwesomeIcon color="white" icon={faEnvelope} />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
