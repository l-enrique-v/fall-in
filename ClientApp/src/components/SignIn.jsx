import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Card } from "react-bootstrap";

const SignIn = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-around">
          <Col md={4} className="my-5">
            <Card className="shadow">
              <Card.Header className="bg-primary text-light">
                Pease log in to continue.
              </Card.Header>
              <Card.Body>
                <Formik
                  enableReinitialize={true}
                  // initialValues={user}
                  // onSubmit={logIn}
                  // validationSchema={basicSchema}
                >
                  <Form>
                    <div className="form-group">
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      ></Field>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="has-error"
                      ></ErrorMessage>
                    </div>
                    <div className="form-group">
                      <Field
                        type="password"
                        name="password"
                        className="form-control mb-2"
                        placeholder="Password"
                      ></Field>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="has-error mb-2"
                      ></ErrorMessage>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </Form>
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SignIn;
