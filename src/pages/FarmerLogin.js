import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const FarmerLogin = () => {
  return (
    <div style={styles.page}>
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={4}>
            <Card className="shadow border-0 rounded-4">
              <Card.Body className="p-4">
                
                {/* Logo */}
                <div className="text-center mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2909/2909767.png"
                    alt="Farmer Logo"
                    width="65"
                  />
                  <h4 className="mt-3 fw-bold text-success">
                    Farmer Portal
                  </h4>
                </div>

                {/* Login Form */}
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      className="rounded-pill py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="rounded-pill py-2"
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      variant="success"
                      size="lg"
                      className="rounded-pill"
                    >
                      Login
                    </Button>
                  </div>
                </Form>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(to right, #d4fc79, #96e6a1)",
    minHeight: "100vh",
  },
};

export default FarmerLogin;
