import { Col, Row, Container } from "react-bootstrap";

const Register = () => {
  return (
    <div className="register">
      <section className="contact" id="connect">
        <Container>
          <Row>
            <Col lg={12}>
              <h2>Register</h2>
            </Col>
            <Col lg={8} className="mx-auto contact-form">
              <form name="contact" method="post">
                <Row>
                  <input type="hidden" name="form-name" value="contact" />
                  <Col lg={8} className="px-1 mx-auto">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Adress"
                    />
                  </Col>
                  <Col lg={8} className="px-1 mx-auto">
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Col>
                  <Col lg={6} className="px-1 mx-auto">
                    <button type="submit">
                      <span>Submit</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Register;
