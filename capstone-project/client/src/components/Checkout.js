import React, { useState} from "react";
import {Link} from "react-router-dom";
import {
  Card,
  Form,
} from "react-bootstrap";

const Checkout = () => {
  const [isLoading] = useState(false);
  return (
    <div>
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
              <p style={{ textAlign: "center" }}>Checkout and Payment</p>
              <div className="mb-3">
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-center">
                      <strong> Card Holder's Name</strong>
                    </Form.Label>
                    <Form.Control
                      type="text_field"
                      placeholder="Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                      <strong>Card Number</strong>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Card Number"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                      <strong> CVV Card Expiry Date</strong>
                    </Form.Label>
                    <div>
                      <input
                        placeholder="CVV"
                        style={{
                          width: "15%",
                          border: "solid 1px grey",
                          borderRadius: "5px",
                        }}
                      ></input>
                      <select style={{ padding: "4px", borderRadius: "5px" }}>
                        <option></option>
                        <option value="01">Jan (01)</option>
                        <option value="02">Feb (02)</option>
                        <option value="03">Mar (03)</option>
                        <option value="04">Apr (04)</option>
                        <option value="05">May (05)</option>
                        <option value="06">June (06)</option>
                        <option value="07">July (07)</option>
                        <option value="08">Aug (08)</option>
                        <option value="09">Sep (09)</option>
                        <option value="10">Oct (10)</option>1
                        <option value="11">Nov (11)</option>
                        <option value="12">Dec (12)</option>
                      </select>
                      <select style={{ padding: "4px", borderRadius: "5px" }}>
                        <option value="22">2022</option>
                        <option value="23">2023</option>
                        <option value="24">2024</option>
                        <option value="25">2025</option>
                        <option value="26">2026</option>
                        <option value="27">2027</option>
                        <option value="28">2028</option>
                        <option value="29">2029</option>
                      </select>
                    </div>
                  </Form.Group>

                  <div style={{ textAlign: "center" }}>
                    <Link to='/success'>
                    <button
                      className="login_button"
                      type="submit"
                    >
                      {isLoading ? "Loading..." : "Complete Payment"}
                    </button>
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
