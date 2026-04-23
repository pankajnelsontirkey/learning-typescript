import { ActionTypes } from '../actionTypes';

interface SearchedRepositoriesAction {
  type: typeof ActionTypes.SEARCHED_REPOSITORIES;
}

interface SearchedRepositoriesSuccessAction {
  type: typeof ActionTypes.SEARCHED_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchedRepositoriesErrorAction {
  type: typeof ActionTypes.SEARCHED_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchedRepositoriesAction
  | SearchedRepositoriesSuccessAction
  | SearchedRepositoriesErrorAction;
