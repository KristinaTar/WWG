import React, { useEffect } from 'react';
import { getApps } from "../../api/api";
import { useNavigate } from "react-router-dom";

const AppsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getApps()
      .then(
        apps => {
          console.log({ apps })
        }
      )
      .catch(() => {
        navigate('/login');
      })
  }, []);

  return (
    <div>
      AppsPage
    </div>
  );
}

export default AppsPage;