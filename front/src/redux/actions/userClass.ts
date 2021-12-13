import axios from 'axios';
import { Dispatch } from 'redux';
import { userClassActions, userClassActionsType } from '../types/userClassTypeRedux';

export const getTeacherAndStudent = () => {
  return async (dispatch: Dispatch<userClassActions>) => {
    try {
      dispatch({ type: userClassActionsType.SET_USER_CLASS_LOADER, payload: true });
      const response = await axios.get(`users/about`);
      dispatch({ type: userClassActionsType.SET_USER_CLASS_DATA, payload: response.data });
      dispatch({ type: userClassActionsType.SET_USER_CLASS_LOADER, payload: false });
      return response;
    } catch (e) {
      dispatch({ type: userClassActionsType.SET_USER_CLASS_LOADER, payload: false });
      console.error(`Произошла ошибка` + e);
    }
  };
};

export const getUserClassData = (userClass: string) => {
  return async (dispatch: Dispatch<userClassActions>) => {
    try {
      dispatch({ type: userClassActionsType.SET_USER_CLASS_LOADER, payload: true });
      const response = await axios.get(`users/about`);
    } catch (e) {
      console.error(`Произошла ошибка` + e);
    }
  };
};
