import React from 'react';
import MainImage from "../../global/images/Catalog.png";
import AuthLayoutStyles from "./AuthLayout.styles";

type Props = {
  children?: React.ReactNode
}
const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <AuthLayoutStyles>
      <div className="form_container">
        {children}
      </div>
      <img src={MainImage} alt="abstraction image" className="img"/>
    </AuthLayoutStyles>
  );
}

export default AuthLayout;