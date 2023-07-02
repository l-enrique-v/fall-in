import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const UserProfile = () => {
  return (
    <>
      <Container fluid className="d-flex">
        <Col md={3}>
          <h2>Friends</h2>
          <Table className="border striped">
            <thead className="bg-secondary">
              <td>Photo</td>
              <td>Name</td>
              <td>Common Interest</td>
            </thead>
            <tr>
              <td>
                <img
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="..."
                  className="img-fluid rounded-circle"
                />
              </td>
              <td>Sean Combs</td>
            </tr>
          </Table>
        </Col>
        <Col></Col>
        <Col>
          <Row>
            {/* <Col className="border border rounded border-success p-3 text-center me-2"> */}
            <h2 className="mb-3">John Snuffy</h2>
            <img
              src="https://randomuser.me/api/portraits/men/7.jpg"
              alt="..."
              className="img-fluid"
            />

            <p>
              <em>Email: johnsnuffy@dispostable.com</em>
            </p>
            <Button type="submit" className="mt-2">
              Logout
            </Button>
            {/* </Col> */}
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default UserProfile;
