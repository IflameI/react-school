export type authuserDataType = {
  email: string;
  password: string;
};

export type userInfo = {
  id: number;
  name: string;
  role: string;
  userClass: string;
};

export interface userState {
  dataUser: userInfo;
  token: string | null;
  isAuth: boolean;
  isLoader: boolean;
  error: string;
}

export enum userActionsType {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_USER_TOKEN = 'SET_USER_TOKEN',
  SET_USER_LOADER = 'SET_USER_LOADER',
  SET_USER_ERROR = 'SET_USER_ERROR',
  SET_USER_INFO = 'SET_USER_INFO',
  SET_USER_LOGOUT = 'SET_USER_LOGOUT',
}

interface setUserIsAuthType {
  type: userActionsType.SET_IS_AUTH;
  payload: boolean;
}

interface setUserLogoutAuthType {
  type: userActionsType.SET_USER_LOGOUT;
}

interface setUserTokenType {
  type: userActionsType.SET_USER_TOKEN;
  payload: string | null;
}

interface setUserLoadingType {
  type: userActionsType.SET_USER_LOADER;
  payload: boolean;
}

interface setUserErrorType {
  type: userActionsType.SET_USER_ERROR;
  payload: string;
}

interface setUserInfoType {
  type: userActionsType.SET_USER_INFO;
  payload: userInfo;
}
interface setUserLogoutType {
  type: userActionsType.SET_USER_LOGOUT;
}

export type userActions =
  | setUserIsAuthType
  | setUserTokenType
  | setUserLogoutAuthType
  | setUserLoadingType
  | setUserErrorType
  | setUserInfoType
  | setUserLogoutType;
