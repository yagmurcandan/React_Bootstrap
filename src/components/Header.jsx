import {Container , Navbar, Nav, } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" bg="dark " data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default Header;