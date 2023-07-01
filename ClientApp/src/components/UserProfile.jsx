import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const UserProfile = () => {
  return (
    <>
      <Container className="m-5">
        <Row>
          <Col
            md={4}
            className="border border rounded border-primary p-3 text-center"
          >
            <h2 className="mb-3">John Snuffy</h2>
            <img src="" alt="..." className="img-fluid" />

            <p>
              <em>Email: johnsnuffy@dispostable.com</em>
            </p>
            <Button type="submit" className="mt-2">
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;
