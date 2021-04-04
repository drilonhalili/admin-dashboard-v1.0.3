import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { FormWrapper, StyledFrom } from "../../../hoc/layout/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Message from "../../../components/UI/Message/Message";

import * as actions from "../../../store/actions";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The password is required.")
    .min(8, "The password is too short."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match.`)
    .required("You need to confirm your password."),
});

const SignUp = ({ signUp, loading, error }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Sign up for an account
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to register your new account
          </Heading>
          <StyledFrom>
            <Field
              type="text"
              name="firstName"
              placeholder="Your first name..."
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Your last name..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Signing up..." : null}
              type="submit"
            >
              Sign up
            </Button>
            <Message error show={error}>
              {error}
            </Message>
          </StyledFrom>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
