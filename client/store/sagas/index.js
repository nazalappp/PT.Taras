/**
 *
 * Root Sagas
 *
 */
import { all } from '@redux-saga/core/effects'

import arenaSaga from './arenaSaga'
import articleSaga from './articleSaga'
import authSaga from './authSaga'
import sliderSaga from './sliderSaga'

export default function* rootSaga () {
  yield all([
    arenaSaga(),
    articleSaga(),
    authSaga(),
    sliderSaga()
  ])
}
