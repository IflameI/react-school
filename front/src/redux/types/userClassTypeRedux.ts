type userSubjects = {
  id: number;
  gradeFirstPer: number;
  gradeSecondPer: number;
  gradeThirdPer: number;
  gradeFourPer: number;
};

export type subjectType = {
  id: number;
  subjectName: string;
  UserSubjects: userSubjects;
};

type userClassItem = {
  id: number;
  name: string;
  role: string;
  grade: subjectType;
  subjects?: subjectType[];
};

type avaliableRolesType = {
  id: number;
  value: string;
  description: string;
};

export type userChangeRoleType = Omit<userClassItem, 'name' | 'grade'>;
export type userChangeGradeType = {
  userId: number;
  subjectName: string;
  grade: number | string;
  period: string;
};

export interface userClassState {
  userClassData: userClassItem[];
  isLoader: boolean;
  avaliableRoles: avaliableRolesType[];
}

export enum userClassActionsType {
  SET_LOADER_USER_CLASS = 'SET_LOADER_USER_CLASS',
  SET_DATA_USER_CLASS = 'SET_DATA_USER_CLASS',
  SET_AVALIABLE_ROLES_USER_CLASS = 'SET_AVALIABLE_ROLES_USER_CLASS',
  SET_CHANGE_ROLE_USER_CLASS = 'SET_CHANGE_ROLE_USER_CLASS',
  SET_CHANGE_GRADE_USER_CLASS = 'SET_CHANGE_GRADE_USER_CLASS',
}

interface setLoaderUserClassType {
  type: userClassActionsType.SET_LOADER_USER_CLASS;
  payload: boolean;
}

interface setDataUserClassType {
  type: userClassActionsType.SET_DATA_USER_CLASS;
  payload: userClassItem[];
}

interface setAvaliableRolesUserClassType {
  type: userClassActionsType.SET_AVALIABLE_ROLES_USER_CLASS;
  payload: avaliableRolesType[];
}

interface setChangeRoleUserClassType {
  type: userClassActionsType.SET_CHANGE_ROLE_USER_CLASS;
  id: number;
  role: string;
}

interface setChangeGradeUserClassType {
  type: userClassActionsType.SET_CHANGE_GRADE_USER_CLASS;
  id: number;
  grade: subjectType;
}

export type userClassActions =
  | setLoaderUserClassType
  | setDataUserClassType
  | setAvaliableRolesUserClassType
  | setChangeRoleUserClassType
  | setChangeGradeUserClassType;
