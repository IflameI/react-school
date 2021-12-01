export type userDataType = {
  email: string;
  password: string;
};

export interface userState {
  data: null | userDataType;
  token: string | null;
  isAuth: boolean;
}

export enum userActionsType {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_USER_DATA_PENDING = 'SET_USER_DATA_PENDING',
  SET_USER_TOKEN = 'SET_USER_TOKEN',
  SET_USER_LOGOUT = 'SET_USER_LOGOUT',
}

interface setUserIsAuthType {
  type: userActionsType.SET_IS_AUTH;
  payload: boolean;
}

interface setUserLogoutAuthType {
  type: userActionsType.SET_USER_LOGOUT;
}

interface setUserDataPendingType {
  type: userActionsType.SET_USER_DATA_PENDING;
}

interface setUserTokenType {
  type: userActionsType.SET_USER_TOKEN;
  payload: string | null;
}

export type userActions =
  | setUserDataPendingType
  | setUserIsAuthType
  | setUserTokenType
  | setUserLogoutAuthType;
