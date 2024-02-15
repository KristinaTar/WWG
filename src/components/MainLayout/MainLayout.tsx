import React, { useEffect, useState } from 'react';
import MainLayoutStyles from "./MainLayout.styles";
import Avatar from '../../global/images/Avatar.svg';
import { getUserData } from "../../api/api";
import { UserData } from "../../global/types";
import TitleIcon from '../../global/images/CatalogIcon.svg'
import Ellipse4 from '../../global/images/Ellipse4.svg'

type Props = {
  title?: string
  children?: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ title, children }) => {
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
          <img src={Avatar} alt="user avatar" className="header-avatar"/>
          <div>
            <div className="header-name">{userData?.username}</div>
            <div className="header-usertype">{userData?.username}</div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-title">
          <img src={TitleIcon} alt="content-icon" width={24} height={24} />
          <div className="content-title-header">Catalog</div>
          {title && (<>
            <img src={Ellipse4} alt="content-icon" width={12} height={12}/>
            <div className="content-title-text">{title}</div>
          </>)}
        </div>
        {children}
      </div>
    </MainLayoutStyles>
  );
}

export default MainLayout;