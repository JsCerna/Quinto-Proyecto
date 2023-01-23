import React, { useContext } from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import NavbarBT from 'react-bootstrap/Navbar';
import UserContext from '../../config/contexts/users/UserContext';
import './navbar.css';

export default function Navbar() {
  const ctx = useContext( UserContext )

  const { logout, user } = ctx
  return (
    <NavbarBT id="navbar-bootstrap" bg='dark' variant='dark' expand="md">
      <Container>
      <img class="navbar-brand"  alt=' ' src="https://i.ibb.co/HCvh1b2/Red-Alloy-Wheel-PNG.png" width="5%"/>
        <NavbarBT.Brand href='/'>  
          Inicio
        </NavbarBT.Brand>
        <NavbarBT.Toggle aria-controls="basic-navbar-nav"></NavbarBT.Toggle>
        <NavbarBT.Collapse id='basic-navbar-nav'>
          <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          {
            user?.email ? <>
          <Nav.Link href='/profile'>Perfil</Nav.Link>
          <Button onClick={ () => logout() } > <Nav.Link href='/'>Cerrar sesión</Nav.Link></Button>
           </> : <>
          <Nav.Link href='/auth/login'>Iniciar sesión</Nav.Link>
          <Nav.Link href='/auth/signup'>Registrarse</Nav.Link>
           </>
          }
            <Nav.Link href='/informacion'>¿Quiénes somos?</Nav.Link>
            <Nav.Link href='/catalogue'>Catálogo</Nav.Link>
            <Nav.Link href='/ubicacion'>Ubicación</Nav.Link>
          </Nav>
        </NavbarBT.Collapse>
      </Container>
    </NavbarBT>
  );
}


