import axios from 'axios';
import { Dispatch } from 'redux';

import {
  userChangeRoleType,
  userClassActions,
  userClassActionsType,
} from '../types/userClassTypeRedux';

export const getTeacherAndStudent = () => {
  return async (dispatch: Dispatch<userClassActions>) => {
    try {
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: true });
      const response = await axios.get(`users/about`, {
        headers: {
          Authorization: 'Bearer ' + window.localStorage.BearerSchool,
        },
      });
      dispatch({ type: userClassActionsType.SET_DATA_USER_CLASS, payload: response.data });
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: false });
      return response;
    } catch (e) {
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: false });
      console.error(`Произошла ошибка` + e);
    }
  };
};

export const getAllAvaliableRoles = () => {
  return async (dispatch: Dispatch<userClassActions>) => {
    try {
      const response = await axios.get(`roles`);
      dispatch({
        type: userClassActionsType.SET_AVALIABLE_ROLES_USER_CLASS,
        payload: response.data,
      });
    } catch (e) {
      console.error(`Произошла ошибка` + e);
    }
  };
};

export const getStudents = (userClass: string, subject: string) => {
  return async (dispatch: Dispatch<userClassActions>) => {
    try {
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: true });
      const response = await axios.get(`users/usersClass/${userClass}/${subject}`);
      dispatch({
        type: userClassActionsType.SET_DATA_USER_CLASS,
        payload: response.data,
      });
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: false });
      return response;
    } catch (e) {
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: false });
      console.error(`Произошла ошибка` + e);
    }
  };
};

export const setChangeUserRole = (roleData: userChangeRoleType) => {
  return async (dispatch: Dispatch<userClassActions>) => {
    try {
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: true });
      const response = await axios.post(`users/role`, roleData, {
        headers: {
          Authorization: 'Bearer ' + window.localStorage.BearerSchool,
        },
      });
      dispatch({
        type: userClassActionsType.SET_CHANGE_ROLE_USER_CLASS,
        id: response.data.id,
        role: response.data.role,
      });
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: false });
      return response;
    } catch (e) {
      dispatch({ type: userClassActionsType.SET_LOADER_USER_CLASS, payload: false });
      console.error(`Произошла ошибка` + e);
    }
  };
};
