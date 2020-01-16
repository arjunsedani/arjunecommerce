/*
 * Created Date: February 3rd 2019, 11:32:27 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */
import { LIST_DATES } from './types';

export const initialState = {
  dates: []
};

const reducer = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case LIST_DATES:
      return {
        ...state,
        dates: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
