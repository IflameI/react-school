import { userActions, userActionsType, userState } from '../types/userTypeRedux';

const initialState: userState = {
  data: null,
  token: window.localStorage.BearerSchool,
  isAuth: window.localStorage.BearerSchool ? true : false,
  isLoader: false,
};

export const user = (state = initialState, action: userActions): userState => {
  switch (action.type) {
    case userActionsType.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case userActionsType.SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case userActionsType.SET_USER_LOADER:
      return { ...state, isLoader: action.payload };

    default:
      return state;
  }
};
