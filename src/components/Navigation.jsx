import '../styles/Nav.css'
import {Navbar, Nav, Button} from 'react-bootstrap'

// We are going to fully remove and refactor this nav element into a bootstrap nav element

function Navigation() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Habit</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About Habit</Nav.Link>
      <Nav.Link href="#pricing">Try Habit</Nav.Link>
    </Nav>
    <Nav>
      <Button className="mr-2">Sign Up</Button>
      <Button variant="outline-primary">Login</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navigation;