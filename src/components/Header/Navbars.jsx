import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Container } from "@mui/material";
import "../../css/Navbars.css";

export default function Navbars() {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ color: "pink" }}>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dress</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" id="nav_link">
              Bundles
            </Nav.Link>
            <Nav.Link href="#link" id="nav_link">
              Subscribe 🙳 Save
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" id="nav_brand" className="me-auto">
            <b>DUMMY</b>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavDropdown title="Learn" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dress</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" id="nav_link">
              About Us
            </Nav.Link>
            <Nav.Link href="/" id="nav_link">
              {" "}
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="/" id="nav_link">
              {" "}
              <FaUserAlt />
            </Nav.Link>
            <Nav.Link href="/" id="nav_link">
              {" "}
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
