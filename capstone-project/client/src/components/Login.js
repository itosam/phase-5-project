import React, { useState, useContext } from "react";
import {Card, Form, Alert } from "react-bootstrap";
import { UserContext } from "./context/Users";
import { IsLoginContext } from "./context/IsLogin";


function Login() {
  const { setUser } = useContext(UserContext);
  const { setIsLogin } = useContext(IsLoginContext);

  const [username, setUsername] = useState(null);

  const [password, setPassword] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState([]);

  function handleName(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

function handleSubmit(e) {
  e.preventDefault();
  setIsLoading(true);
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((r) => {
    setIsLoading(false);
    if (r.ok) {
      r.json().then((user) => {
        setUser(user);
        setIsLogin(true);
      });
    } else {
      r.json().then((err) => setErrors(err));
    }
  });
}

  return (
    <div className="form">
      <Card
        style={{
          fontFamily: "Inter",
          border: "none",
        }}
      >
        <Card.Body>
          <div>
            <h2 style={{ fontFamily: "Hanalei Fill", textAlign:"center"}}>
              Be@rbrick & Mortar
            </h2>
            <p style={{ textAlign:"center"}}>Please enter your login and password!</p>
            <div className="mb-3">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label className="text-center">
                    <strong>Username</strong>
                  </Form.Label>
                  <Form.Control
                    type="text_field"
                    placeholder="Enter Username"
                    onChange={handleName}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <strong>Password</strong>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handlePassword}
                    required
                  />
                </Form.Group>
                {errors.length === 0 ? (
                  ""
                ) : (
                  <Alert severity="error">{errors.error}</Alert>
                )}
                <div style={{ textAlign:"center"}}>
                  <button className="login_button" type="submit">
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </Form>
              <div className="mt-3">
                <p className="mb-0  text-center">
                  Don't have an account?{" "}
                  <a href="/createAccount" className="text-primary fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
