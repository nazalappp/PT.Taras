/**
 *
 * @module Sagas/article
 *
 * @desc Article
 *
 */

import {
  GET_ARTICLES_REQUESTED,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED
} from '../constants'
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { get } from '@/utils/interceptors'
import { queryParams } from '@/utils/'

const url = 'articles'

const getArticles = (params) => {
  return get(`${url}${queryParams(params.page, params.limit)}`)
}

function* fetchArticles (action) {
  try {
    const res = yield call(getArticles, action?.payload)

    if (res) {
      yield put({
        type: GET_ARTICLES_SUCCESS,
        payload: res?.data?.data
      })
    }
  } catch (err) {
    yield put({
      type: GET_ARTICLES_FAILED,
      payload: 'Somthings Wrong'
    })
  }
}

function* articleSaga () {
  yield takeEvery(GET_ARTICLES_REQUESTED, fetchArticles)
}

export default articleSaga
