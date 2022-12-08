import {Col, Row, Container} from "react-bootstrap"


const Footer = () => {
    return (
      <div className="footer">
        <section className="">
          <Container className="text-center text-md-start mt-5">
            <Row className="mt-3">
              <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  BE@RBRICK & MORTAR
                </h6>
                <p>
                  We are an e-commerce site that features Be@rbrick collectable art figures.
                  This site is project use only, and not for commercial use.
                </p>
              </Col>

              <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Site Built With</h6>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Ruby
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Rails
                  </a>
                </p>

              </Col>

              <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
              </Col>

              <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  Bear York, NY 0000, US
                </p>
                <p>
                  Bearbrickmorter@example.com
                </p>
                <p className="me-3">
                 + 01 234 567 88
                </p>
              </Col>
            </Row>
          </Container> 
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
        >
          © Ito 2022
        </div>
      </div>
    );
}

export default Footer