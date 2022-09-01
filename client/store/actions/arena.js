import { GET_ARENAS_REQUESTED } from '../constants'

export const getArenas = (params) => {
  return (dispatch) => {
    return dispatch({ type: GET_ARENAS_REQUESTED, payload: params })
  }
}
