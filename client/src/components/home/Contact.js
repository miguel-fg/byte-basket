import { Col, Row, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Contact Us</h2>
          </Col>
          <Col lg={12}>
            <p>
              Feel free to reach out to us! Whether you have questions,
              suggestions, or would like to collaborate, our team is here to
              assist you.
            </p>
          </Col>
          <Col lg={8} className="mx-auto contact-form">
            <form name="contact" method="post">
              <Row>
                <input type="hidden" name="form-name" value="contact" />
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" name="lastname" placeholder="Last Name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Adress"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </Col>
                <Col>
                  <textarea
                    required
                    row="6"
                    placeholder="Message"
                    name="message"
                  ></textarea>
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
  );
};

export default Contact;
