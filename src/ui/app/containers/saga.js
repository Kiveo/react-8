/**
 * saga.js
 *
 * This file contains the Saga function used to get data from the
 * service layer. The Saga function injects data into the Redux
 * store via the put function, which takes an action as a parameter.
 *
 * @see https://redux-saga.js.org/
 * @see https://decembersoft.com/posts/changing-react-route-programmatically-with-redux-saga/
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import { DISPATCH_ACTIONS } from './constants';
import { returnLuckyNumber } from './actions';

export function* getLuckyNumber({ user }) {
  // TODO: What port is the service layer running on again?
  // Opted for backticks to include query string, assigned dev LH: 1337
  const requestUrl = `http://localhost:1337/lucky-number?username=${user.username}`;
  try {
    const data = yield call(request, requestUrl);
    // TODO: Do stuff with the result
    yield put(returnLuckyNumber(data.luckyNumber))
    yield put(push('/lucky'));
  } catch (err) {
    // TODO: Bonus points for some error handling
    console.log(err);
    // My intial thoughts for error handling: send a dispatch and have it display an error field or redirect. 
    // yield put(returnErrorMessage(error))
    // Will return to this later, on my GH when I have more time 
  }
}

export default function* sagaFunction() {
  yield takeLatest(DISPATCH_ACTIONS.GET_LUCKY_NUMBER, getLuckyNumber);
}
