import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function CreateAccount({ returnUserId }) {
  const [name, setName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmP, setConfirmP] = useState(null);

  const [errorMessage, setErrorMessage] = useState("Create Account");

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
      const newUser = {
        username: username,
        password: password,
      };

      fetch("/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((r) => r.json())
        .then((user) => {
          returnUserId(user.id);
          navigate.push("/home");
        });
    }
  }

  const backStyle = {
    color: "white",
    marginLeft: "-320px",
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2">
                    Create an Account
                  </h2>
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
                        <Button variant="outline-secondary" type="submit">
                          {errorMessage}
                        </Button>
                      </div>
                    </Form>
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
