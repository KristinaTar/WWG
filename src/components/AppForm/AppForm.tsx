import React from 'react';
import { Field, Formik } from "formik";
import { PlatformType } from "../../global/types";
import { useNavigate } from "react-router-dom";
import { FormikErrors, FormikHelpers } from "formik/dist/types";
import { convertImageToBase64 } from "../../global/helpers/formatData";

type FormValues = {
  name: string,
  description: string,
  platform: PlatformType,
  icon: string,
}

type Props = {
  onSubmit: (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => void | Promise<any>;
  validate?: (values: FormValues) => void | object | Promise<FormikErrors<FormValues>>;
  initialValues: FormValues;
}
const AppForm: React.FC<Props> = ({ onSubmit, validate, initialValues }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit}>
          Name
          <input
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          Description
          <input
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          {errors.description && touched.description && errors.description}
          Platform
          <Field as="select" name="platform">
            <option value={PlatformType.ios}>{PlatformType.ios}</option>
            <option value={PlatformType.android}>{PlatformType.android}</option>
          </Field>
          {errors.platform && touched.platform && errors.platform}
          <input
            type="file"
            name="icon"
            onChange={async (e) => {
              if (!e.target.files) return;
              const base64Icon = await convertImageToBase64(e.target.files[0]);
              await setFieldValue('icon', base64Icon);
            }}
          />
          {errors.icon && touched.icon && errors.icon}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default AppForm;