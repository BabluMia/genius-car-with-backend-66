import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from '../../../img/logo.png'
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () =>{
    signOut(auth)
  }
  return (
    <>
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}>
              <img src={logo} width={200} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Exparts</Nav.Link>
              
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link  to="/about" as={Link}>About</Nav.Link>
              {
                user ? <Nav.Link eventKey={2} onClick={handleLogOut} to="/home" as={Link}>
                Logout
              </Nav.Link> : <Nav.Link eventKey={2} to="/login" as={Link}>
                Login
              </Nav.Link>
              }
              {/* <Nav.Link eventKey={2} to="/login" as={Link}>
                Login
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
