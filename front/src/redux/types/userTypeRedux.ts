export type authuserDataType = {
  email: string;
  password: string;
};

type userInfo = {
  name: string;
  role: string;
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
  SET_USER_LOGOUT = 'SET_USER_LOGOUT',
  SET_USER_LOADER = 'SET_USER_LOADER',
  SET_USER_ERROR = 'SET_USER_ERROR',
  SET_USER_INFO = 'SET_USER_INFO',
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

interface setUserLoading {
  type: userActionsType.SET_USER_LOADER;
  payload: boolean;
}

interface setUserError {
  type: userActionsType.SET_USER_ERROR;
  payload: string;
}

interface setUserInfo {
  type: userActionsType.SET_USER_INFO;
  payload: userInfo;
}

export type userActions =
  | setUserIsAuthType
  | setUserTokenType
  | setUserLogoutAuthType
  | setUserLoading
  | setUserError
  | setUserInfo;
