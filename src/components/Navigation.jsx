import '../styles/Nav.css'
import {Navbar, Nav, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

// We are going to fully remove and refactor this nav element into a bootstrap nav element

function Navigation() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to='/' href="#home">Habit</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to='/' href="#features">Home</Nav.Link>
      <Nav.Link as={Link} to='/about' href="#pricing">About Habit</Nav.Link>
      <Nav.Link as={Link} to='/tryIt' href="#pricing">Try Habit</Nav.Link>
    </Nav>
    <Nav>
      <Button as={Link} to='/signup' className="mr-2">Sign Up</Button>
      <Button as={Link} to='/login' variant="outline-primary">Login</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navigation;