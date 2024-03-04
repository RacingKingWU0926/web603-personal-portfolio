import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Jason Lei</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/#portfolio">Portfolio</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/about/">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/say-hi/">Say Hi!</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavbarComponent;
