

import {useState, useContext} from "react";
import { useHistory} from 'react-router-dom'
import {Container, Nav, Navbar, Alert, Button} from "react-bootstrap";
import { ImCart } from "react-icons/im";
import { UserContext } from "./context/Users";
import { IsLoginContext } from "./context/IsLogin";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const { isLogin } = useContext(IsLoginContext);
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    if (isLogin === false) {
      setShowAlert(true);
    } else {useHistory.push('/cart')}
  }

  return (
    <Navbar bg="dark" varient="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          Be@rbrick & Mortar
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/login" style={{ color: "white" }}>
            {" "}
            {user !== null ? `Account` : "Login"}
          </Nav.Link>
          <Nav.Link href="/cart">
            <ImCart onClick={handleClick} style={{ color: "white" }} />
          </Nav.Link>
        </Nav>
      </Container>
      {showAlert ? (
        <Alert
          variant="warning"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "70%",
          }}
        >
          Please log in !!!
          <Button variant="warning" onClick={() => setShowAlert(false)}>
            x
          </Button>
        </Alert>
      ) : (
        ""
      )}
    </Navbar>
  );
};

export default NavBar;
