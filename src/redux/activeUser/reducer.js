/*
 * Created Date: February 3rd 2019, 11:32:27 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import type { User, Action } from './types';
import { SET_USER_INFO, TOGGLE_LOADED } from './actions';

const initialState = {
  loaded: false,
  info: {
    id: '',
    firstName: '',
    lastName: '',
    email: ''
  }
};

const reducer = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        info: action.payload
      };
    case TOGGLE_LOADED:
      return {
        ...state,
        loaded: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
