import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';  // Asegúrate de importar tu configuración de Firebase
import { signOut } from 'firebase/auth';
import { toast } from "react-toastify";

function NavbarComponent() {
  const [user] = useAuthState(auth);  // Obtenemos el usuario autenticado, si existe

  const handleLogout = () => {
    signOut(auth)  // Cerrar sesión de Firebase

  };
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/", { replace: true });
    auth.signOut();
    toast.success("Logged out successfully.");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MyddApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Mostrar enlaces solo si el usuario está autenticado */}
            {user ? (
              <>
                <Nav.Link as={Link} to="/offers">offers</Nav.Link>
                <Nav.Link as={Link} to="/ayuda">ayuda</Nav.Link>
                <Nav.Link as={Link} to="/user/profile">user</Nav.Link>
              </>
            ) : (
              <>
                {/* Si no está autenticado, no mostrar los enlaces */}
                {/* <Nav.Link disabled>No autorizado</Nav.Link> */}
              </>
            )}
          </Nav>
          <Nav>
            {user ? (
              // <Nav.Link href="#logout" onClick={handleLogout}>Logout</Nav.Link>
              <Nav.Link href="#logout" onClick={onLogout}>Logouoot</Nav.Link>
            ) : (
              <>
                {/* Mostrar enlaces de autenticación si no está autenticado */}
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/sign-up">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
