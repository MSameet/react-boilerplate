import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Container, Form } from "react-bootstrap";

export const LogIn = () => {
  return (
    <div className="mt-5">
      <Container>
        <Formik
          initialValues={{ email: "", name: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Required"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit} className="login_Form">
                <Form.Group className="mb-3">
                  {" "}
                  <Form.Label htmlFor="email" style={{ display: "block" }}>
                    Email
                  </Form.Label>
                  <Form.Control
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email" style={{ display: "block" }}>
                    Name
                  </Form.Label>
                  <Form.Control
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </Form.Group>

                <Button
                  type="button"
                  variant="dark"
                  className="outline me-3"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>

                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  Submit
                </Button>

                {/* <DisplayFormikState {...props} /> */}
              </form>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
};
