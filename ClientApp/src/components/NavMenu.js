import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        container
        light
      >
        <NavbarBrand tag={Link} to="/">
          Battle Buddies
        </NavbarBrand>
        <ul className="navbar-nav flex-grow">
          <NavItem>
            <NavLink tag={Link} className="text-dark" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="btn btn-primary" to="/SignIn">
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="btn btn-primary mx-2" to="/Register">
              Register
            </NavLink>
          </NavItem>
        </ul>
      </Navbar>
    </header>
  );
};
export default NavMenu;
