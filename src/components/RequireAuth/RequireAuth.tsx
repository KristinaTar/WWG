import React from 'react';
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../global/helpers/jwtHelpers";

type Props = {
  children?: React.ReactNode
}
const RequireAuth: React.FC<Props> = ({ children }) => {
  if (!getAccessToken()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      {children}
    </div>
  );
}

export default RequireAuth;