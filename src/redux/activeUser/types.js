/*
 * Created Date: February 3rd 2019, 11:32:27 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

export type UserData = {
  id: string,
  firstName: string,
  lastName: string,
  email: string
};

export type User = {
  fetching: boolean,
  loaded: boolean,
  data: UserData
};

export type SetUserInfoAction = {
  type: string,
  payload: UserData
};

export type Action = SetUserInfoAction;
