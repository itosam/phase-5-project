import React, { useState, useContext } from "react";
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap";
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
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow" variant="light">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 ">StopToShop</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control
                          type="text_field"
                          placeholder="Enter Username"
                          onChange={handleName}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
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
                      <div className="d-grid">
                        <Button variant="outline-dark" type="submit">
                          {isLoading ? "Loading..." : "Login"}
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a
                          href="/createAccount"
                          className="text-primary fw-bold"
                        >
                          Sign Up
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

export default Login;
