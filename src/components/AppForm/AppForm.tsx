import React from 'react';
import { ErrorMessage, Field, Formik } from "formik";
import { PlatformType } from "../../global/types";
import { useNavigate } from "react-router-dom";
import { FormikErrors, FormikHelpers } from "formik/dist/types";
import { convertImageToBase64 } from "../../global/helpers/formatData";
import AppFormStyles from "./AppForm.styles";
import Input from "../Input";
import FileInput from "../FileInput";

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
  create?: boolean;
}
const AppForm: React.FC<Props> = (
  {
    onSubmit,
    validate,
    initialValues,
    title,
    create = false
  }
) => {
  const navigate = useNavigate();
  console.log({create})

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
            <div className="form-fields-container">
              <div>
                <Field
                  name="name"
                  label="Name"
                  as={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  clear={() => setFieldValue('name', '')}
                />
              </div>
              <div>
                <Field
                  name="description"
                  label="Description"
                  as={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  clear={() => setFieldValue('description', '')}
                />
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
                <Field
                  name="icon"
                  label="Icon"
                  as={FileInput}
                  onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!e.target.files) return;
                    const base64Icon = await convertImageToBase64(e.target.files[0]);
                    await setFieldValue('icon', base64Icon);
                  }}
                />
              </div>
            </div>
            <div className="buttons-container">
              <div
                className="cancel-btn"
                onClick={() => navigate('/')}
              >
                Cancel
              </div>
              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className="btn save-btn"
              >
                {create ? "Create" : "Save"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </AppFormStyles>
  );
}

export default AppForm;