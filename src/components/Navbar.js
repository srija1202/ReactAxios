import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">User Management</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/add-user">Add User</Nav.Link>
    </Nav>
  </Navbar>
);

export default AppNavbar;
