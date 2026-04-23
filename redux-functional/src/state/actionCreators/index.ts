import axios from 'axios';
import type { Dispatch } from 'redux';

import type { Action } from '../actions';
import { ActionTypes } from '../actionTypes';

const URL = 'https://registry.npmjs.org/-/v1/search';

export const searchedRepositories = (keyword: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.SEARCHED_REPOSITORIES });

    try {
      const { data } = await axios.get(URL, { params: { text: keyword } });

      const names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ActionTypes.SEARCHED_REPOSITORIES_SUCCESS,
        payload: names
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionTypes.SEARCHED_REPOSITORIES_ERROR,
          payload: error.message
        });
      }
    }
  };
};
