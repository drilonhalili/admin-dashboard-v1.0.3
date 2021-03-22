import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FormWrapper } from "../../../hoc/layout/elements";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string().required("The password is required."),
});

const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmiting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Form>
            <Field type="email" name="email" placeholder="Your email..." />
            <ErrorMessage name="email" />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
            />
            <ErrorMessage name="password" />
            <button type="submit">Submit</button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
