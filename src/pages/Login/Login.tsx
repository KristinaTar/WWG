import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

import AuthLayout from "../../components/AuthLayout";
import LoginStyles from "./Login.styles";
import InputSmall from "../../components/InputSmall";
import { getErrorsObject, login } from "../../api/api";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

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
              username?: string,
              password?: string,
            } = {};

            if (!values.username) errors.username = 'Required';
            if (!values.password) errors.password = 'Required';

            return errors;
          }}
          onSubmit={async (values, { setErrors }) => {
            try {
              await login(values.username, values.password);
              navigate('/');
            } catch (error: any) {
              const errors = getErrorsObject(error);
              setErrors(errors);
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
                tabIndex={1}
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
                  tabIndex={2}
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
                  Don't have account? <Link className="link" to="/signup" tabIndex={0}>Sign up</Link>
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
                    tabIndex={3}
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