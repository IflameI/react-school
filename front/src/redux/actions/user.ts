import axios from 'axios';

import { Dispatch } from 'redux';
import { userActions, userActionsType, userDataType } from '../types/userTypeRedux';

type loginUserResponse = {
  data: {
    token: string;
  };
};

export const fetchUserRegister = (postData: userDataType) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      dispatch({ type: userActionsType.SET_USER_LOADER, payload: true });
      const response = await axios.post('/auth/registration', postData);
      dispatch({ type: userActionsType.SET_IS_AUTH, payload: true });
      dispatch({ type: userActionsType.SET_USER_TOKEN, payload: response.data.token });
      window.localStorage.setItem('BearerSchool', response.data.token);
      if (window.localStorage.BearerSchool === response.data.token) {
      }
      dispatch({ type: userActionsType.SET_USER_LOADER, payload: false });
      return response;
    } catch (e: any) {
      dispatch({ type: userActionsType.SET_USER_LOADER, payload: false });
      if (e.response.status === 400) {
        alert('Пользователь с таким email уже существует');
      }
    }
  };
};

export const fetchUserLogin = (postData: userDataType) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      dispatch({ type: userActionsType.SET_USER_LOADER, payload: true });
      const response: loginUserResponse = await axios.post('/auth/login', postData);
      dispatch({ type: userActionsType.SET_IS_AUTH, payload: true });
      dispatch({ type: userActionsType.SET_USER_TOKEN, payload: response.data.token });
      window.localStorage.setItem('BearerSchool', response.data.token);
      if (window.localStorage.BearerSchool === response.data.token) {
      }
      dispatch({ type: userActionsType.SET_USER_LOADER, payload: false });
      return response;
    } catch (e) {
      dispatch({ type: userActionsType.SET_USER_LOADER, payload: false });
      console.warn('Произошла ошибка при авторизации ' + e);
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
