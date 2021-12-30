type subjectsData = {
  id: number;
  subjectName: string;
};

export interface subjectsState {
  isLoader: boolean;
  error: string;
  subjectsData: subjectsData[];
}

export enum subjectsActionsType {
  SET_SUBJECTS_LOADER = 'SET_SUBJECTS_LOADER',
  SET_SUBJECTS_ERROR = 'SET_SUBJECTS_ERROR',
  SET_SUBJECTS_DATA = 'SET_SUBJECTS_DATA',
}

interface setSubjectLoadingType {
  type: subjectsActionsType.SET_SUBJECTS_LOADER;
  payload: boolean;
}

interface setSubjectErrorType {
  type: subjectsActionsType.SET_SUBJECTS_ERROR;
  payload: string;
}

interface setSubjectDataType {
  type: subjectsActionsType.SET_SUBJECTS_DATA;
  payload: subjectsData[];
}

export type subjectsActions = setSubjectLoadingType | setSubjectErrorType | setSubjectDataType;
