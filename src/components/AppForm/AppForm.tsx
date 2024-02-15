import React from 'react';
import { Field, Formik } from "formik";
import { PlatformType } from "../../global/types";
import { useNavigate } from "react-router-dom";
import { FormikErrors, FormikHelpers } from "formik/dist/types";
import { convertImageToBase64 } from "../../global/helpers/formatData";
import AppFormStyles from "./AppForm.styles";

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
  title?: string;
}
const AppForm: React.FC<Props> = (
  { onSubmit, validate, initialValues, title }
) => {
  const navigate = useNavigate();

  return (
    <AppFormStyles>
      <div className="form-title">{title || initialValues.name}</div>
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
          <form className="form-body" onSubmit={handleSubmit}>
            <div>

              Name
              <input
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </div>
            <div>
              Description
              <input
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}
            </div>
            <div>
              Platform
              <Field as="select" name="platform">
                <option value={PlatformType.ios}>{PlatformType.ios}</option>
                <option value={PlatformType.android}>{PlatformType.android}</option>
              </Field>
              {errors.platform && touched.platform && errors.platform}
            </div>
            <div>
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
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </AppFormStyles>
  );
}

export default AppForm;