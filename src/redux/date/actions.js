/*
 * Created Date: February 3rd 2019, 11:32:27 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import axios from 'axios';
import * as ActionTypes from './types';

const fetchData = () => {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    axios(`https://spaceoccupancy.firebaseio.com/data.json`).then(response => {
      dispatch({ type: ActionTypes.LIST_DATES, payload: { response } });
    });
  };
};

export default { fetchData };
