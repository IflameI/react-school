import { user } from './user';
import { userClass } from './userClass';
import { subject } from './subject';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user,
  userClass,
  subject,
});

export type RootState = ReturnType<typeof rootReducer>;
