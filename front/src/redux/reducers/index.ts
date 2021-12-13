import { user } from './user';
import { userClass } from './userClass';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user,
  userClass,
});

export type RootState = ReturnType<typeof rootReducer>;
