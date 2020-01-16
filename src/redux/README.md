# Redux Modules
For each `screen` or `feature` listed in our `src/screens` folder, there will be a corresponding folder inside the `src/redux` folder to represent a redux module for those features.

**⚠️ Note:** In `3.0`, all redux modules can be found here to be used globally unlike in `2.0`, where some extensions have their own redux state, reducers, actions, etc.

Also, each folder will contain these files: `actions.js`, `reducer.js`, `selectors.js`, `types.js`, `epic.js`, `index.js`.

#### `actions.js`
Exports each action that can change the state.
- **⚠️ Note:** In `2.0`, the `actions.js` file also contains a map of action handlers that the reducer will use to determine the next state. This differs greatly from other React Native Apps out in the world, so going into `3.0`, this format will no longer be followed. Instead, the map of action handlers will be created in the `reducer.js` file.

#### `reducer.js`
Exports the reducer function, which accepts an action and returns the next version of the state. Also, it will include and export the `initialState` for this reducer.
- **⚠️ Note:** In `3.0`, the `reducer.js` will no longer import a map of action handlers from the `action.js` file. Instead the action handlers will be created in the `reducer.js`.

**Example**
```js
import type { User, Action } from './types';
import { SET_USER_DATA } from './actions';

const initialState = {
  data: {
    id: '',
    firstName: 'xxx',
    lastName: 'yyy',
    email: ''
  }
};

const reducer = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
```

#### `selectors.js` (as needed)
Exports functions which can "select" keys from a specific state in the redux store. These are used to compute derived data in your `container components` using `reselect`. (Basically, it grabs data from the state and computes data that you wouldn't necessarily want to store in the state).

#### `types.js`
Exports all of the flow-types for entities, state, and actions relative to this reducer.

#### `epic.js` (as needed)
Exports all of the handlers for async side-effects (redux-observable `epics`), you will use to modify this state.
Read more about redux-observable `epics` [here](https://redux-observable.js.org/docs/basics/Epics.html)

#### `index.js`
Imports all of the above files and exports them as a collective. it will also have a key that will represent this redux module, so you can select specific redux modules from the state.

### `redux/index.js`
There will be an `index.js` file outside of all the redux module folders.

**Example**
src
--redux
  --activeUser
    --action.js
    --epic.js
    --index.js
    --reducer.js
    --selector.js
    --types.js
  --booking
    --action.js
    --epic.js
    --index.js
    --reducer.js
    --selector.js
    --types.js
  --index.js

This `index.js` file will import all of the reducers from the other folders (e.g. activeUser and booking) and combine the reducers into a single exportable reducer.

**Example**
```js
import { combineReducers } from 'redux';
import reducer as activeUserReducer from './activeUser';
import reducer as bookingReducer from './booking';

const rootReducer = combineReducers({
  activeUserReducer,
  bookingReducer
});

export default rootReducer;
```
More information on `combineReducers` [here](https://redux.js.org/api/combinereducers)

### TODO: temp description, add more later on

