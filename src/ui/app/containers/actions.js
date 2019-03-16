/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

// TODO: Add more actions if needed
//creating sample action for functionality test
export function getSampleMessage(message) {
  return {
    type: DISPATCH_ACTIONS.GET_SAMPLE_MESSAGE,
    message
  }
}

//creating success action
export function returnLuckyNumber() {
  return {
    type: DISPATCH_ACTIONS.LUCKY_NUMBERS_SUCCEEDED,
    luckyNumber
  }
}