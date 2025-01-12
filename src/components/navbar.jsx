import cartPng from "../assets/images/cart.png";
import menuPng from "../assets/images/menu.png";
import logoPng from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";

const StoreNavbar = () => {
  return (
    
    <div className="navbar_container">
      <Navbar className="my-2 navbar" color="dark" dark>
      <NavbarBrand href="/red-store">
            <img alt="logo" src={logoPng} width="125px" />
      </NavbarBrand>
          
        <Container className="d-flex justify-content-between align-items-end">
         
          <Nav className="d-flex align-items-center">
            <NavItem>
              <Link className="navbar_link" to="/red-store">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="navbar_link" to="/red-store/products">Products</Link>
            </NavItem>
            <NavItem>
              <Link className="navbar_link" to="/red-store/about">About</Link>
            </NavItem>
            <NavItem>
              <Link className="navbar_link" to="/red-store/contact">Contact</Link>
            </NavItem>
            <NavItem>
              <Link className="navbar_link" to="/red-store/account">Account</Link>
            </NavItem>
            <NavItem>
              <Link className="navbar_link" to="/red-store/profile">Profile</Link>
            </NavItem>
            <NavItem>
              <Link className="navbar_link" to="/red-store/profile">
                <img src={cartPng} width="30px" height="30px" alt="Cart" />
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      {/* Mobile Menu Icon */}
      <img src={menuPng} className="menu-icon" alt="menu-icon" />
    </div>
  );
};

export default StoreNavbar;
