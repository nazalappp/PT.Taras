/**
 *
 * @module Sagas/arena
 *
 * @desc Arena
 *
 */

import {
  GET_ARENAS_REQUESTED,
  GET_ARENAS_SUCCESS,
  GET_ARENAS_FAILED
} from '../constants'
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { get } from '@/utils/interceptors'
import { queryParams } from '@/utils/'

const url = 'arenas'

const getArenas = (params) => {
  return get(`${url}${queryParams(params.page, params.limit)}`)
}

function* fetchArenas (action) {
  try {
    const res = yield call(getArenas, action?.payload)

    if (res) {
      yield put({
        type: GET_ARENAS_SUCCESS,
        payload: res?.data?.data
      })
    }
  } catch (err) {
    yield put({
      type: GET_ARENAS_FAILED,
      payload: 'Somthings Wrong'
    })
  }
}

function* arenaSaga () {
  yield takeEvery(GET_ARENAS_REQUESTED, fetchArenas)
}

export default arenaSaga
