type userClassItem = {
  id: number;
  name: string;
  role: string;
};

type avaliableRolesType = {
  id: number;
  value: string;
  description: string;
};

export interface userClassState {
  userClassData: userClassItem[];
  isLoader: boolean;
  avaliableRoles: avaliableRolesType[];
}

export enum userClassActionsType {
  SET_USER_CLASS_LOADER = 'SET_USER_CLASS_LOADER',
  SET_USER_CLASS_DATA = 'SET_USER_CLASS_DATA',
  SET_USER_CLASS_AVALIABLE_ROLES = 'SET_USER_CLASS_AVALIABLE_ROLES',
}

interface setUserClassLoaderType {
  type: userClassActionsType.SET_USER_CLASS_LOADER;
  payload: boolean;
}

interface setUserClassDataType {
  type: userClassActionsType.SET_USER_CLASS_DATA;
  payload: userClassItem[];
}

interface setUserClassAvaliableRolesType {
  type: userClassActionsType.SET_USER_CLASS_AVALIABLE_ROLES;
  payload: avaliableRolesType[];
}

export type userClassActions =
  | setUserClassLoaderType
  | setUserClassDataType
  | setUserClassAvaliableRolesType;
