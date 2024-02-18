import React from 'react';
import MainImage from "../../global/images/Catalog.png";
import AuthLayoutStyles from "./AuthLayout.styles";

type Props = {
  title: string,
  children?: React.ReactNode
}
const AuthLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <AuthLayoutStyles>
      <div className="main-block">
        <div className="content-container">
          <h1 className="page-title">
            {title}
          </h1>
          <div className="content">
            {children}
          </div>
        </div>
      </div>
      <img src={MainImage} alt="abstraction" className="img"/>
    </AuthLayoutStyles>
  );
}

export default AuthLayout;