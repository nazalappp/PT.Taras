import {
  AUTHENTICATION_FAILED,
  AUTHENTICATION_REQUESTED,
  AUTHENTICATION_SUCCESS
} from "../constants"

const initialState = {
  isAuth: false,
  loading: false,
  error: null
}

/**
 *
 * Auth Reducers
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
export const auth = (state = initialState, action) => {
  const data = action?.payload
  switch (action.type) {
    case AUTHENTICATION_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case AUTHENTICATION_SUCCESS:
      console.log(data)
      return {
        ...state,
        loading: false
      }
    case AUTHENTICATION_FAILED:
      console.log(data)
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
