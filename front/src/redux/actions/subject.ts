import axios from 'axios';
import { Dispatch } from 'redux';
import { subjectsActions, subjectsActionsType } from '../types/subjectTypeRedux';

export const getAllAvaliableSubjects = () => {
  return async (dispatch: Dispatch<subjectsActions>) => {
    try {
      dispatch({ type: subjectsActionsType.SET_SUBJECTS_LOADER, payload: true });
      const response = await axios.get(`subjects`);
      dispatch({
        type: subjectsActionsType.SET_SUBJECTS_DATA,
        payload: response.data,
      });
      dispatch({ type: subjectsActionsType.SET_SUBJECTS_LOADER, payload: false });
      return response;
    } catch (e) {
      dispatch({ type: subjectsActionsType.SET_SUBJECTS_LOADER, payload: false });
      console.error(`Произошла ошибка` + e);
    }
  };
};
