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
            navigate('/login')
          
            setIsLogin(true)
            setUser(user)});
          } else {
            r.json().then((err) => setErrorMessage(err.error));
          }
        })
  }}

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2">Create an Account</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleForm}>
                      <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Control
                          type="text_field"
                          placeholder="Enter Username"
                          onChange={handleUsername}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          onChange={handlePassword}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          onChange={handleConfirmP}
                          required
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="outline-dark" type="submit">
                          {isLoading ? "Loading..." : "Sign up"}
                        </Button>
                      </div>
                    </Form>
                    {errorMessage.length === 0 ? (
                      ""
                    ) : (
                      <Alert>{errorMessage}</Alert>
                    )}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
  }

export default CreateAccount;
