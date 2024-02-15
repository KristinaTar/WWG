import React, { useEffect, useState } from 'react';
import MainLayoutStyles from "./MainLayout.styles";
import Avatar from '../../global/images/Avatar.png';
import { getUserData } from "../../api/api";
import { UserData } from "../../global/types";

type Props = {
  children?: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    getUserData().then(userData => {
      setUserData(userData);
    });
  }, []);

  return (
    <MainLayoutStyles>
      <div className="header">
        <div className="header-info">
          <img src={Avatar} alt="user avatar"/>
          <div className="header-name">User Name</div>
          <div>user</div>

        </div>

      </div>

      {children}
    </MainLayoutStyles>
  );
}

export default MainLayout;