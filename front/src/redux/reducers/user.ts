import { userActions, userActionsType, userInfo, userState } from '../types/userTypeRedux';

const initialState: Readonly<userState> = {
  dataUser: {
    role: '',
    name: '',
    userClass: '',
  },
  token: window.localStorage.BearerSchool,
  isAuth: window.localStorage.BearerSchool ? true : false,
  isLoader: false,
  error: '',
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
    case userActionsType.SET_USER_ERROR:
      return { ...state, error: action.payload };
    case userActionsType.SET_USER_LOADER:
      return { ...state, isLoader: action.payload };
    case userActionsType.SET_USER_INFO:
      return { ...state, dataUser: action.payload };
    case userActionsType.SET_USER_LOGOUT:
      window.localStorage.removeItem('BearerSchool');
      return { ...state, isAuth: false, token: null, dataUser: {} as userInfo };
    default:
      return state;
  }
};
