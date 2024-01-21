import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

// login hook
import { useLogin } from "../hooks/useLogin"

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
      e.preventDefault();

      await login(email, password);
      navigate("/dashboard");
  };

  return (
    <div className="register">
      <section className="contact" id="connect">
        <Container>
          <Row>
            <Col lg={12}>
              <h2>Sign In</h2>
            </Col>
            <Col lg={8} className="mx-auto contact-form">
              <form name="contact" onSubmit={handleSubmit}>
                <Row>
                  <input type="hidden" name="form-name" value="contact" />
                  <Col lg={8} className="px-1 mx-auto">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Adress"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col lg={8} className="px-1 mx-auto">
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                  <Col lg={6} className="px-1 mx-auto">
                    <button type="submit">
                      <span>Submit</span>
                    </button>
                    {error && <div>{error}</div>}
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

export default Signin;
