import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Example = (props) => {

return (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Welcome to Hobby Road</NavbarBrand>
      <Nav className="mr-auto" navbar>
          <NavItem>
          <NavLink href="/signup">Signup for an Account</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/login">Login</NavLink>
          </NavItem>
      </Nav>
    </Navbar>
  </div>
  );
}

export default Example;