import { Tokens } from "../types";

const JWT_USERNAME = 'jwt.username';
const JWT_TOKEN = 'jwt.token';
const JWT_REFRESH_TOKEN = 'jwt.refresh.token';

export function getAccessToken() {
  return localStorage.getItem(JWT_TOKEN);
}
export function getRefreshToken() {
  return localStorage.getItem(JWT_REFRESH_TOKEN);
}

export function setTokens(username: string, tokens: Tokens) {
  localStorage.setItem(JWT_USERNAME, username);
  localStorage.setItem(JWT_TOKEN, tokens.access);
  localStorage.setItem(JWT_REFRESH_TOKEN, tokens.refresh);
}

export function updateToken(accessToken: string) {
  localStorage.setItem(JWT_TOKEN, accessToken);
}