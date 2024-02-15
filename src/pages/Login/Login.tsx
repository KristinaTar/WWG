import React from 'react';
import { addApp, login } from "../../api/api";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { PlatformType } from "../../global/types";
const Login: React.FC = () => {
  function handleSubmit() {

  }

  return (
    // <div>
    //   Login
    //   <button
    //     onClick={() => {
    //       login('user', 'user321654');
    //     }}
    //   >Login</button>
    // </div>

    <div>
      Login
      <Formik
        initialValues={{
          name: '',
          password: '',

        }}
        validate={values => {
          const errors: {
            name?: string,
            password?: string,

          } = {};

          if (!values.name) errors.name = 'Required';
          if (!values.password) errors.password = 'Required';

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {

        }}
      >
        {({
            isSubmitting
          }) => (
          <Form onSubmit={handleSubmit}>
            <label>
              User Name <Field type="email" name="email"/>
              <ErrorMessage name="email" component="div"/>
            </label>
            <label>
              Password
              <Field type="password" name="password"/>
              <ErrorMessage name="password" component="div"/>
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;