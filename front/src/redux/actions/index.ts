/* eslint-disable import/no-anonymous-default-export */
import * as userActionCreators from './user';
import * as userClassActionCreators from './userClass';

export default {
  ...userActionCreators,
  ...userClassActionCreators,
};
