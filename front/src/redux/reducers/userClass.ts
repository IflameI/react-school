import {
  userClassActions,
  userClassActionsType,
  userClassState,
} from '../types/userClassTypeRedux';

const initialState: userClassState = {
  userClassData: [],
  isLoader: false,
};

export const userClass = (state = initialState, action: userClassActions): userClassState => {
  switch (action.type) {
    case userClassActionsType.SET_USER_CLASS_LOADER:
      return { ...state, isLoader: action.payload };
    case userClassActionsType.SET_USER_CLASS_DATA:
      return { ...state, userClassData: action.payload };
    default:
      return state;
  }
};
