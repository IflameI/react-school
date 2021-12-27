import {
  userClassActions,
  userClassActionsType,
  userClassState,
} from '../types/userClassTypeRedux';

const initialState: userClassState = {
  userClassData: [],
  isLoader: false,
  avaliableRoles: [],
};

export const userClass = (state = initialState, action: userClassActions): userClassState => {
  switch (action.type) {
    case userClassActionsType.SET_LOADER_USER_CLASS:
      return { ...state, isLoader: action.payload };
    case userClassActionsType.SET_DATA_USER_CLASS:
      return { ...state, userClassData: action.payload };
    case userClassActionsType.SET_AVALIABLE_ROLES_USER_CLASS:
      return { ...state, avaliableRoles: action.payload };
    case userClassActionsType.SET_CHANGE_ROLE_USER_CLASS:
      return {
        ...state,
        userClassData: state.userClassData.map((item) =>
          item.id === action.id ? { ...item, role: action.role } : item,
        ),
      };
    default:
      return state;
  }
};
