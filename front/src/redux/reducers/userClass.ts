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
    case userClassActionsType.SET_USER_CLASS_LOADER:
      return { ...state, isLoader: action.payload };
    case userClassActionsType.SET_USER_CLASS_DATA:
      return { ...state, userClassData: action.payload };
    case userClassActionsType.SET_USER_CLASS_AVALIABLE_ROLES:
      return { ...state, avaliableRoles: action.payload };
    default:
      return state;
  }
};
