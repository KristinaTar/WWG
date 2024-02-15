import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import { addApp, editApp, getApp, getUserData } from "../../api/api";
import { AppData, PlatformType } from "../../global/types";
import { Field, Formik } from "formik";
import AppForm from "../../components/AppForm";

const EditAppPage: React.FC = () => {
  const navigate = useNavigate();
  const { appId } = useParams();
  const [appData, setAppData] = useState<AppData | null>(null);

  useEffect(() => {
    const getData = async function () {
      const [userData, _appData] = await Promise.all([
        getUserData(),
        getApp(Number(appId)),
      ]);

      if (_appData.author !== userData?.id) {
        navigate('/');
      } else {
        setAppData(_appData);
      }
    }

    getData().catch(() => navigate('/'));
  }, []);

  return (
    <MainLayout>
      AddAppPage
      {appData && <AppForm
          initialValues={{
            name: appData.name,
            description: appData.description,
            platform: appData.platform as PlatformType,
            icon: '',
          }}
          onSubmit = {async (values, { setSubmitting }) => {
            await editApp(
              Number(appId),
              values,
            );
            setSubmitting(false);
            navigate('/');
          }}
      />}
    </MainLayout>
  );
}

export default EditAppPage;