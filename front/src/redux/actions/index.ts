/* eslint-disable import/no-anonymous-default-export */
import * as userActionCreators from './user';
import * as userClassActionCreators from './userClass';
import * as subjectClassActionCreators from './subject';

export default {
  ...userActionCreators,
  ...userClassActionCreators,
  ...subjectClassActionCreators,
};
