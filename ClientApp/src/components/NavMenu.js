import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import "../fonts/fonts.css";
import logoImage from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const NavMenu = () => {
  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        container
        light
      >
        <NavbarBrand
          tag={Link}
          to="/"
          className="logoletters"
          style={{ fontSize: "3em", color: "#47862d" }}
        >
          <img src={logoImage} alt="Logo" className="logo-image" />
          Battle Buddies
        </NavbarBrand>
        <ul className="navbar-nav flex-grow">
          <NavItem>
            <NavLink tag={Link} className="btn btn-success mx-2" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="btn btn-success mx-2" to="/SignIn">
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="btn btn-success mx-2" to="/Register">
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              className="btn btn-success mx-2"
              to="/UserProfile"
            >
              <FontAwesomeIcon icon={faUser} className="userIcon" />
            </NavLink>
          </NavItem>
        </ul>
      </Navbar>
    </header>
  );
};
export default NavMenu;
