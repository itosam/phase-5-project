

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImCart } from "react-icons/im";
const NavBar = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><strong>StopToShop</strong></Navbar.Brand>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cart"><ImCart/></Nav.Link>
          </Nav>

      </Container>
    </Navbar>
  );
};

export default NavBar;
