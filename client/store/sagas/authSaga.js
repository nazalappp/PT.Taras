/**
 *
 * @module Saga/authentication
 *
 * @desc Authentication
 *
 */

import { post } from '@/utils/interceptors'
import { call, put, takeEvery } from '@redux-saga/core/effects'
import {
  AUTHENTICATION_FAILED,
  AUTHENTICATION_REQUESTED,
  AUTHENTICATION_SUCCESS
} from '../constants'

const authentication = (payload) => {
  return post(`login`, payload)
}

function* postAuthentication (action) {
  try {
    const res = yield call(authentication, action?.payload)

    if (res) {
      yield put({
        type: AUTHENTICATION_SUCCESS,
        payload: res?.data?.data
      })
    }
  } catch (err) {
    yield put({
      type: AUTHENTICATION_FAILED,
      payload: 'Your credentials are incorrect'
    })
  }
}

function* authSaga () {
  yield takeEvery(AUTHENTICATION_REQUESTED, postAuthentication)
}

export default authSaga
