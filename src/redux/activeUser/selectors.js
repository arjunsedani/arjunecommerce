/*
 * Created Date: February 3rd 2019, 11:32:27 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import { createSelector } from 'reselect';

const selectInfo = createSelector(
  state => state.activeUser,
  user => user.info
);

const selectIsUserLoaded = createSelector(
  state => state.activeUser,
  user => user.loaded
);

const selectInitials = createSelector(
  selectInfo,
  ({ firstName = '', lastName = '' }) => `${firstName.slice(0, 1)}${lastName.slice(0, 1)}`
);

export default { selectInfo, selectIsUserLoaded, selectInitials };
