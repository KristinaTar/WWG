import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

import AuthLayout from "../../components/AuthLayout";
import RegistrationStyles from "./Registration.styles";
import InputSmall from "../../components/InputSmall";
import { getErrorsObject, register } from "../../api/api";

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');

  return (
    <AuthLayout title="Registration">
      <RegistrationStyles>
        <Formik
          initialValues={{
            username: '',
            password: '',
            confirm_password: '',
          }}
          validate={values => {
            const errors: {
              username?: string,
              password?: string,
              confirm_password?: string,
            } = {};

            if (!values.username) errors.username = 'Required';
            if (!values.password) errors.password = 'Required';
            if (!values.confirm_password) errors.confirm_password = 'Required';

            return errors;
          }}
          onSubmit={async (values, { setErrors }) => {
            if (values.password !== values.confirm_password) {
              setErrors({
                password: 'Passwords must match',
                confirm_password: 'Passwords must match',
              });
              return;
            }

            try {
              await register(values.username, values.password);
              navigate('/');
            } catch (error: any) {
              const errors = getErrorsObject(error);
              setErrors(errors);
              const errorMessage = error.response.data.detail;
              setRegisterError(errorMessage);
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
              <div>
                <Field
                  name="confirm_password"
                  label="Confirm password"
                  type="password"
                  as={InputSmall}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_password}
                  clear={() => setFieldValue('confirm_password', '')}
                />
                <div className="signup-container">
                  If you have account <Link className="link" to="/login" tabIndex={-1}>Log in</Link>
                </div>
              </div>
              <div>
                <div className="button-container">
                  <button
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                    className="btn save-btn"
                  >
                    Send
                  </button>
                </div>
                {registerError && <div className="error-message text-center auto-height">{registerError}</div>}
              </div>
            </Form>
          )}
        </Formik>
      </RegistrationStyles>
    </AuthLayout>
  );
}

export default Registration;