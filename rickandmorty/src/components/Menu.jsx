// Import React-Boostrap components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

// Import stylesheet
import './Menu.css'

// Navbar component
export const Menu = () => {
  return (
    <Navbar fixed="top" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>Rick & Morty API</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
            <Nav.Link as={Link} to='/aboutus'>About Us</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <Link to='/signin'>Mark Otto</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
