export type userDataType = {
  email: string;
  password: string;
};

export interface userState {
  data: null | userDataType;
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

export type userActions =
  | setUserIsAuthType
  | setUserTokenType
  | setUserLogoutAuthType
  | setUserLoading
  | setUserError;
