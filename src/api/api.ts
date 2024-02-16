import axios from "axios";
import { AppData, Tokens, UserData } from "../global/types";
import { getAccessToken, getRefreshToken, setTokens, updateToken } from "../global/helpers/jwtHelpers";

export const BASE_URL = 'http://54.93.213.129/api/';

export async function login(username: string, password: string) {
  const response = await axios.post(
    BASE_URL + 'auth/jwt/create/',
    { username, password }
  );

  const tokens = response.data as Tokens;
  setTokens(username, tokens);
}

const authorizedRequests = axios.create({
  baseURL: BASE_URL,
});

authorizedRequests.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authorizedRequests.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // access token has expired
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = getRefreshToken();
        const response = await axios.post(
          BASE_URL + 'auth/jwt/refresh/',
          { refresh }
        );
        const { access } = response.data;

        updateToken(access);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return axios(originalRequest);
      } catch (error) {
        console.log(error);
        // todo redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export async function getUserData() {
  return (await authorizedRequests.get('auth/users/me/')).data as UserData;
}

export async function getApps() {
  return (await authorizedRequests.get('apps/')).data as AppData[];
}

export async function getApp(appId: number) {
  return (await authorizedRequests.get(`apps/${appId}/`)).data as AppData;
}


export async function getUsers() {
  return (await authorizedRequests.get('auth/users/')).data as UserData[];
}


export async function addApp(
  platform: string,
  name: string,
  description: string,
  icon: string,
) {
  await authorizedRequests.post('apps/', { platform, name, description, icon });
}

export async function editApp(
  appId: number,
  newAppData: {
    platform?: string,
    name?: string,
    description?: string,
    icon?: string,
  }
) {
  const data = { ...newAppData };
  const keys = Object.keys(newAppData) as (keyof typeof newAppData)[];
  for (const key of keys) {
    if (data[key] === '' || data[key] === undefined) {
      delete data[key];
    }
  }

  await authorizedRequests.patch(`apps/${appId}/`, data);
}
