/*
 * Created Date: February 3rd 2019, 11:32:27 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import type { UserData, Action } from './types';

export const FETCH_USER = 'user/FETCH_USER';
export const TOGGLE_LOADED = 'user/TOGGLE_LOADED';
export const SET_USER_INFO = 'user/SET_INFO';

function fetchUser(): Action {
  return {
    type: FETCH_USER
  };
}

const setUserInfo = (user: UserData) => ({
  type: SET_USER_INFO,
  payload: user
});

// function setUserInfo(user: UserData): Action {
//   console.log('user value', user);
//   return {
//     type: SET_USER_INFO,
//     // payload: user
//     payload: user
//   };
// }

function toggleLoaded(loaded: Boolean): Action {
  return {
    type: TOGGLE_LOADED,
    payload: loaded
  };
}

export default { fetchUser, setUserInfo, toggleLoaded };
