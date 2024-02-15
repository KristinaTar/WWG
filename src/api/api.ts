import axios from "axios";
import { AppData, Tokens } from "../global/types";
import { getAccessToken, getRefreshToken, setTokens, updateToken } from "../global/helpers/jwtHelpers";
export const BASE_URL = 'http://54.93.213.129/api/';

export async function login(username: string, password: string) {
  try {
    const response = await axios.post(
      BASE_URL + 'auth/jwt/create',
      {username, password}
    );

    const tokens = response.data as Tokens;
    setTokens(username, tokens);
  } catch(error) {
    console.log("LOGIN ERROR");
    // todo?
  }
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
        const refreshToken = getRefreshToken();
        const response = await axios.post(
          BASE_URL + 'auth/jwt/refresh',
          { refreshToken }
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

export async function getApps() {
  return (await authorizedRequests.get('apps')).data as AppData[];
}
