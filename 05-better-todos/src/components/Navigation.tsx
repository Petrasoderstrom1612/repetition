import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from 'react-router';

const Navigation = () => {
 return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Better Todos🗒️</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>  
            <Nav.Link as={NavLink} to="/todos">Todos</Nav.Link>
            <Nav.Link as={NavLink} to="/todos/:id">Todo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 )
}

export default Navigation;