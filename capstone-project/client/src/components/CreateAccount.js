import React, { useState, useContext } from "react";
import { UserContext } from "./context/Users";
import { IsLoginContext } from "./context/IsLogin";
import { useHistory } from "react-router-dom";
import { Alert, Col, Button, Row, Container, Card, Form } from "react-bootstrap";

const CreateAccount = () => {
  const {setUser} = useContext(UserContext)
  const {setIsLogin} = useContext(IsLoginContext)
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmP, setConfirmP] = useState(null);
  const [isLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const navigate = useHistory();

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmP(e) {
    setConfirmP(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();

    if (password !== confirmP) {
      setErrorMessage("Passwords do not match, try again.");
    } else {
      setErrorMessage([]);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          })
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
            navigate.push('/')
          
            setIsLogin(true)
            setUser(user)});
          } else {
            r.json().then((err) => setErrorMessage(err.error));
          }
        })
  }}

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
            <h2 style={{ fontFamily: "Hanalei Fill", textAlign: "center" }}>
              Be@rbrick & Mortar
            </h2>
            <p style={{ textAlign: "center" }}>Create an Account</p>
            <div className="mb-3">
              <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label className="text-center">
                    <strong>Username</strong>
                  </Form.Label>
                  <Form.Control
                    type="text_field"
                    placeholder="Enter Username"
                    onChange={handleUsername}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <strong>Password</strong>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    onChange={handlePassword}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <strong>Re-enter Password</strong>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleConfirmP}
                    required
                  />
                </Form.Group>

                <div style={{ textAlign: "center" }}>
                  <button className="login_button" type="submit">
                    {isLoading ? "Loading..." : "Signup"}
                  </button>
                </div>
              </Form>
              {errorMessage.length === 0 ? "" : <Alert>{errorMessage}</Alert>}
              <div className="mt-3">
                <p className="mb-0  text-center">
                  have an account?{" "}
                  <a href="/login" className="text-primary fw-bold">
                    back to Login
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

export default CreateAccount;
