import React from 'react';
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import { PlatformType } from "../../global/types";
import { addApp } from "../../api/api";
import AppForm from "../../components/AppForm";


const AddAppPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="New App">
      <AppForm
        title="Create new App"
        initialValues={{
          name: '',
          description: '',
          platform: PlatformType.ios,
          icon: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await addApp(
            values.platform,
            values.name,
            values.description,
            values.icon,
          );
          setSubmitting(false);
          navigate('/');
        }}
        validate={(values) => {
          const errors: {
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
    </MainLayout>
  );
}

export default AddAppPage;