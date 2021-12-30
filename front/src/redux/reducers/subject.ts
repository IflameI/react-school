import { subjectsActions, subjectsActionsType, subjectsState } from '../types/subjectTypeRedux';

const initialState: subjectsState = {
  isLoader: false,
  error: '',
  subjectsData: [],
};

export const subject = (state = initialState, action: subjectsActions): subjectsState => {
  switch (action.type) {
    case subjectsActionsType.SET_SUBJECTS_ERROR:
      return { ...state, error: action.payload };
    case subjectsActionsType.SET_SUBJECTS_LOADER:
      return { ...state, isLoader: action.payload };
    case subjectsActionsType.SET_SUBJECTS_DATA:
      return { ...state, subjectsData: action.payload };
    default:
      return state;
  }
};
