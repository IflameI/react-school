import axios from 'axios';

import { Dispatch } from 'redux';
import { userActions, userActionsType, authuserDataType } from '../types/userTypeRedux';

type authUserResponse = {
  data: {
    token: string;
  };
};

export const setIsAuth = (): userActions => {
  return { type: userActionsType.SET_IS_AUTH, payload: true };
};

export const setUserLoader = (payload: boolean): userActions => {
  return { type: userActionsType.SET_USER_LOADER, payload };
};

export const setUserToken = (response: authUserResponse): userActions => {
  window.localStorage.setItem('BearerSchool', response.data.token);
  return { type: userActionsType.SET_USER_TOKEN, payload: response.data.token };
};

export const setUserError = (payload: string): userActions => {
  return { type: userActionsType.SET_USER_ERROR, payload };
};

export const fetchUserAuth = (postData: authuserDataType, path: 'login' | 'registration') => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      dispatch(setUserLoader(true));
      const response: authUserResponse = await axios.post(`/auth/${path}`, postData);
      dispatch(setIsAuth());
      dispatch(setUserToken(response));
      dispatch(setUserLoader(false));
      return response;
    } catch (e: any) {
      dispatch(setUserLoader(false));
      if (e.response.status === 400) {
        dispatch(setUserError('Пользователь с такой почтой уже существует'));
      } else if (e.response.status === 401) {
        dispatch(setUserError('Неверный логин или пароль'));
      } else if (e.response.status === 404) {
        dispatch(setUserError('Пользователь не найден'));
      } else {
        dispatch(setUserError('Произошла ошибка во время авторизации'));
      }
    }
  };
};

export const setUserLogout = () => {
  return async (dispatch: Dispatch<userActions>) => {
    dispatch({ type: userActionsType.SET_IS_AUTH, payload: false });
    dispatch({ type: userActionsType.SET_USER_TOKEN, payload: null });
    window.localStorage.removeItem('BearerSchool');
  };
};

export const getUserInfoByEmail = (email: string) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const response = await axios.get(`users/about/${email}`);
      dispatch({ type: userActionsType.SET_USER_INFO, payload: response.data });
    } catch (e) {
      console.error(`Произошла ошибка` + e);
    }
  };
};
