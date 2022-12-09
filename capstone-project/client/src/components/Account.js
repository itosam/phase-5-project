import React, { useState, useEffect, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "./context/Users";
import { IsLoginContext } from "./context/IsLogin";
import { Link } from "react-router-dom";
import frame27 from "./Images/frame27.png";

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

    function handleDelete() {
      fetch(
        `users/${user.id}`,
        {
          method: "DELETE",
        }
      ).then(handleLogout);
    }

  return (
    <div>
      <img className="home_img" alt="welcome img" src={frame27} />
      <Card style={{ textAlign: "center", border: "none" }}>
        <Card.Body>
          <Card.Text>
            <h2>Hi {user.username}, Welcome back!</h2>
            <br />
            <h5><strong>Username:</strong> {user.username}</h5>
            <br/>
          </Card.Text>
          <Link to="/cart" className="btn btn-grey">
            Go To Cart
          </Link>
          <button className="login_button" onClick={handleLogout}>
            Logout
          </button>
          <button
            style={{ backgroundColor: "white", border: "none" }}
            onClick={handleDelete}
          >
            Delete Account
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Account;
