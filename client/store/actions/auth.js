import { AUTHENTICATION_REQUESTED } from '../constants'

export const authentication = (payload) => {
  return (dispatch) => {
    return dispatch({ type: AUTHENTICATION_REQUESTED, payload: payload })
  }
}
