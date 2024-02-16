import React from 'react';
import { Field, Formik } from "formik";
import { InputStyle, PlatformType } from "../../global/types";
import { useNavigate } from "react-router-dom";
import { FormikErrors, FormikHelpers } from "formik/dist/types";
import { convertImageToBase64 } from "../../global/helpers/formatData";
import AppFormStyles from "./AppForm.styles";
import Input from "../Input";
import FileInput from "../FileInput";
import FormSelect from "../FormSelect";

export type FormValues = {
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

  return (
    <AppFormStyles create={create}>
      <div className="form-title">{title || initialValues.name}</div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
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
                  style={create ? InputStyle.light : InputStyle.dark}
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
                  style={create ? InputStyle.light : InputStyle.dark}
                />
              </div>
              <FormSelect
                name="platform"
                label="Platform"
                setValue={(value) => setFieldValue("platform", value)}
                style={create ? InputStyle.light : InputStyle.dark}
              />
              <div>
                <Field
                  name="icon"
                  label="Icon"
                  as={FileInput}
                  onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!e.target.files) return;
                    const base64Icon = await convertImageToBase64(e.target.files[0]);
                    await setFieldValue('icon', base64Icon);
                    console.log({values})
                  }}
                />
              </div>
            </div>
            <div className="buttons-container">
              <button
                className="cancel-btn"
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
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