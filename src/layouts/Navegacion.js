import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Navegacion() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>Productos del Hogar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/signup"}>Más Vendidos</Nav.Link>
            <Nav.Link as={NavLink} to={"/signin"}></Nav.Link>
                        <Nav.Link as={NavLink} to={"/cerrar Sesión"}>Contáctenos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={"/cocina"}>Cocina</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/baño"}>
                Baño
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/sala"}>Sala</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to={"/crearproducto"}>
                Crear Producto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Navegacion};