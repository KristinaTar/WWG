import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

import AuthLayout from "../../components/AuthLayout";
import LoginStyles from "./Login.styles";
import InputSmall from "../../components/InputSmall";
import { login } from "../../api/api";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  function handleSubmit() {

  }

  return (
    <AuthLayout title="Log in">
      <LoginStyles>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validate={values => {
            const errors: {
              name?: string,
              password?: string,
            } = {};

            if (!values.username) errors.name = 'Required';
            if (!values.password) errors.password = 'Required';

            return errors;
          }}
          onSubmit={async (values, { setErrors }) => {
            try {
              await login(values.username, values.password);
              navigate('/');
            } catch (error: any) {
              const errorMessage = error.response.data.detail;
              setLoginError(errorMessage);
            }
          }}
        >
          {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
            <Form onSubmit={handleSubmit} className="form">
              <Field
                name="username"
                label="User Name"
                as={InputSmall}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                clear={() => setFieldValue('username', '')}
              />
              <div>
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  as={InputSmall}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  clear={() => setFieldValue('password', '')}
                />
                <div className="signup-container">
                  Don't have account? <Link className="link" to="/signup">Sign up</Link>
                </div>
              </div>
              <div>
                <div className="button-container">
                  <button
                    className="cancel-btn"
                    onClick={() => navigate('/signup')}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                    className="btn save-btn"
                  >
                    Save
                  </button>
                </div>
                {loginError && <div className="error-message text-center auto-height">{loginError}</div>}
              </div>
            </Form>
          )}
        </Formik>
      </LoginStyles>
    </AuthLayout>
  );
}

export default Login;