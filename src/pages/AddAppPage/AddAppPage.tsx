import React from 'react';
import { useNavigate } from "react-router-dom";
import { Field, Formik } from "formik";

import MainLayout from "../../components/MainLayout";
import { PlatformType } from "../../global/types";
import { addApp } from "../../api/api";
import AppForm from "../../components/AppForm";

type FormValuesType = {
  name: string,
  description: string,
  platform: PlatformType,
}

const AddAppPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div>
        <AppForm
          initialValues={{
            name: '',
            description: '',
            platform: PlatformType.ios,
            icon: '',
          }}
          onSubmit = {async (values, { setSubmitting }) => {
            await addApp(
              values.platform,
              values.name,
              values.description,
              values.icon,
            );
            setSubmitting(false);
            navigate('/');
          }}
          validate = {(values) => {
            const errors : {
              name?: string,
              description?: string,
              platform?: string,
              icon?: string,
            } = {};

            if (!values.name) errors.name = 'Required';
            if (!values.description) errors.description = 'Required';
            if (!values.platform) errors.platform = 'Required';
            if (!values.icon) errors.icon = 'Required';

            return errors;
          }}
        />
      </div>
    </MainLayout>
  );
}

export default AddAppPage;