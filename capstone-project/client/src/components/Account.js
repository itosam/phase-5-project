import React, { useState, useEffect, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "./context/Users";
import { IsLoginContext } from "./context/IsLogin";
import { Link } from "react-router-dom";
const Account = () =>{

  const { user, setUser } = useContext(UserContext);
  const { setIsLogin } = useContext(IsLoginContext);

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        setIsLogin(false);
      }
    });
  }
  return (
    <div>
      <Card className="card" style={{ width: "60%", margin: "10%",}}>
        <Card.Body>
          <Card.Text>
            <p><strong>Hi {user.username}, Welcom back!</strong></p>
            <br />
            <label>Username: {user.username}</label>
          </Card.Text>
          <Link to="/cart" className="btn btn-grey">Go To Cart</Link>
          <Button style={{}} onClick={handleLogout}>
            Logout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Account;
