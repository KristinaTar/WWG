import React, { useEffect, useState } from 'react';
import { getApps, getUsers } from "../../api/api";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import { AppData, UserData } from "../../global/types";
import AppsPageStyles from "./AppsPage.styles";
import { formatData } from "../../global/helpers/formatData";
import SearchIcon from '../../global/images/SearchIcon.svg';
import SortIcon from '../../global/images/SortIcon.svg';


const AppsPage: React.FC = () => {
  const [apps, setApps] = useState<AppData[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getApps()
      .then(
        data => {
          setApps(data)
        }
      )
      .catch(() => {
        navigate('/login');
      });
    getUsers()
      .then(
        data => {
          setUsers(data)
        }
      )
      .catch(() => {
        navigate('/login');
      });
  }, [navigate]);

  return (
    <MainLayout>
      <AppsPageStyles>
        <div className="top-layout">
          <button
            onClick={() => {
              navigate('/add')
            }}
            className="btn create-btn"
          >Create App
          </button>
          <div className="search-container">
            <input type="input" placeholder="Search App" className="search-input"/>
            <img src={SearchIcon} alt="search icon" className="search-icon"/>
          </div>
        </div>
        <div className="apps-table">
          <div className="apps-table-row apps-table-row--head">
            <div>Name App</div>
            <div>Author</div>
            <div>Icon</div>
            <div className="platform-container">
             <div> Platform</div>
              <img className="sort-icon" src={SortIcon} alt="sort icon"/>
            </div>
            <div>Description</div>
            <div>Time create</div>
          </div>
          {
            apps.map(app => (
              <div
                key={`app-${app.id}`}
                className="apps-table-row"
                onClick={() => navigate(`edit/${app.id}`)}
              >
                <div>
                  {app.name}
                </div>
                <div>
                  {users.find(user => user.id === app.author)?.username || ""}
                </div>
                <div>
                  <img src={app.icon} width="40px" height="40px" alt={`${app.name} icon`}/>
                </div>
                <div>
                  {app.platform}
                </div>
                <div>
                  {app.description}
                </div>
                <div>
                  {formatData(app.created_at)}
                </div>
              </div>
            ))
          }
        </div>
      </AppsPageStyles>
    </MainLayout>
  );
}

export default AppsPage;