/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(user) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    user
  };
}

// TODO: Add more actions if needed
// creating success action
export function returnLuckyNumber(luckyNumber) {
  return {
    type: DISPATCH_ACTIONS.RETURN_LUCKY_NUMBER,
    luckyNumber
  }
}