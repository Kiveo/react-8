/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1,
  message: "Sample Initial message"
});

function reducer(state = initialState, action) {
  switch (action.type) {
    //case intially was ???, chose name based on constants/actions
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER:
      // TODO: Set things in the Redux store
      return {...state, username: action.username};
    case DISPATCH_ACTIONS.GET_SAMPLE_MESSAGE:
      return {...state, message: action.message};
    case DISPATCH_ACTIONS.RETURN_LUCKY_NUMBER:
      return {...state, luckyNumber: action.luckyNumber};
    default:
      return state;
  }
}

export default reducer;
