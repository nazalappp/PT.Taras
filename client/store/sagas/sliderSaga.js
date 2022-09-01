/**
 *
 * @module Sagas/slider
 *
 * @desc Slider
 *
 */

import {
  GET_SLIDER_REQUESTED,
  GET_SLIDER_SUCCESS,
  GET_SLIDER_FAILED
} from '../constants'
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { get } from '@/utils/interceptors'

const url = 'sliders?page=1&limit=4'

const getSliders = () => {
  return get(`${url}`)
}

function* fetchSliders (action) {
  try {
    const res = yield call(getSliders, action?.payload)

    if (res) {
      yield put({
        type: GET_SLIDER_SUCCESS,
        payload: res?.data?.data
      })
    }
  } catch (err) {
    yield put({
      type: GET_SLIDER_FAILED,
      payload: 'Somthings Wrong'
    })
  }
}

function* sliderSaga () {
  yield takeEvery(GET_SLIDER_REQUESTED, fetchSliders)
}

export default sliderSaga
