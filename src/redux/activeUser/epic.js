/*
 * Created Date: February 18th 2019, 7:37:26 pm
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import { ofType, combineEpics } from 'redux-observable';
import { delay, mergeMap } from 'rxjs/operators';

import activeUserActions, { FETCH_USER } from './actions';

// const fetchActiveUserEpic = action$ => {
//   return action$.pipe(
//     ofType(FETCH_USER),
//     delay(1000),
//     mergeMap(() => [
//       activeUserActions.toggleLoaded(true),
//       activeUserActions.setUserInfo({ firstName: 'Arjun', lastName: 'Sedani' })
//     ])
//   );
// };

const fetchActiveUserEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USER),
    delay(1000),
    mergeMap(() => [
      activeUserActions.toggleLoaded(true),
      activeUserActions.setUserInfo({ firstName: 'Arjun', lastName: 'Sedani' })
    ])
  );

export const rootEpic = combineEpics(fetchActiveUserEpic);
