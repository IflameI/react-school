type userClassItem = {
  id: number;
  name: string;
  role: string;
};

export interface userClassState {
  userClassData: userClassItem[];
  isLoader: boolean;
}

export enum userClassActionsType {
  SET_USER_CLASS_LOADER = 'SET_USER_CLASS_LOADER',
  SET_USER_CLASS_DATA = 'SET_USER_CLASS_DATA',
}

interface setUserClassLoaderType {
  type: userClassActionsType.SET_USER_CLASS_LOADER;
  payload: boolean;
}

interface setUserClassDataType {
  type: userClassActionsType.SET_USER_CLASS_DATA;
  payload: any;
}

export type userClassActions = setUserClassLoaderType | setUserClassDataType;
