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
  userInfo: {firstname: "SampleFirst", lastname: "SampleLast", username: "SampleUserinfo"}
});

// may consider decoupling luckynumber from user info, but focusing on minimum functionality first
function reducer(state = initialState, action) {
  switch (action.type) {
    //case intially was (???), names based on constants/actions
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER:
      // TODO: Set things in the Redux store
      return { ...state, userInfo: action.user };
    case DISPATCH_ACTIONS.RETURN_LUCKY_NUMBER:
      return { ...state, luckyNumber: action.luckyNumber };
    default:
      return state;
  }
}

export default reducer;
