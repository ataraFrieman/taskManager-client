import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

const LoginHC = (props) => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>{props.children}</Card.Body>
        </Card>
      </div>
    </Container>
  );
};
export default LoginHC;
