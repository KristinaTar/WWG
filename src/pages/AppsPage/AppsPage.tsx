import React, { useEffect, useState } from 'react';
import { getApps, getUsers } from "../../api/api";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import { AppData, UserData } from "../../global/types";
import AppsPageStyles from "./AppsPage.styles";
import { formatData } from "../../global/helpers/formatData";

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
  }, []);

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
          <div>Search</div>
        </div>
        <div className="apps-table">
          <div className="apps-table-row apps-table-row--head">
            <div>Name App</div>
            <div>Author</div>
            <div>Icon</div>
            <div>Platform</div>
            <div>Description</div>
            <div>Time create</div>
          </div>
          {
            apps.map(app => (
              <div
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