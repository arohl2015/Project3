import React from 'react';
import "../../css/style.css"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const Example = (props) => {

return (
  <div className="Nav">
    <Navbar color="dark" light expand="md">
      <NavbarBrand className="nav1" href="/"><span  className="nav1">Welcome to Hobby Road</span></NavbarBrand>
      <Nav className="mr-auto" navbar>
          <NavItem >
          <NavLink href="/signup"><span  className="nav1">Signup for an Account</span></NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/login"> <span className="nav1">Login </span> </NavLink>
          </NavItem>
      </Nav>
    </Navbar>
  </div>
  );
}

export default Example;