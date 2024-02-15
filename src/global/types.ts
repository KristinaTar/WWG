export type Tokens = AccessToken & {
  refresh: string,
}

export type AccessToken = {
  access: string,
}

export type AppData = {
  author: number,
  description: string,
  icon: string,
  id: number,
  name: string,
  platform: string,
  created_at: string,
}

export type UserData = {
  email: string,
  id: number,
  username: string,
}

export enum PlatformType {
  ios = 'IOS',
  android = 'Android',
}