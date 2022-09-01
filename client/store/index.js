import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'

// * Reducers
import reducers from './reducers'
// * Actions
import actions from './actions'
// * Root Saga
import rootSaga from './sagas'

const sagasMiddleware = createSagaMiddleware()

// * Map State Reduct
export function mapStateToProps (...keys) {
  return (state) => keys.reduce((res, key) => {
    res[key] = state[key]
    return res
  }, {})
}

// * Map Actions Redux
export function mapActions (...keys) {
  // eslint-disable-next-line array-callback-return
  return (dispatch) => keys.reduce((res, key) => {
    if (typeof actions[key] === 'function') {
      res[key] = (...args) => actions[key](...args)(dispatch)
      return res
    }
  }, {})
}

/**
 *
 * Initialize Store Redux
 *
 * @param {*} initialState
 * @returns
 */
export function initializeStore (initialState = {}) {
  // * Combine All Reducers
  const reducer = combineReducers({ ...reducers })

  // * Create Store Redux
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(sagasMiddleware)
    )
  )

  // * Run Redux Saga
  sagasMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(initializeStore)
