import { GET_SLIDER_REQUESTED } from '../constants'

export const getSliders = () => {
  return (dispatch) => {
    return dispatch({ type: GET_SLIDER_REQUESTED })
  }
}
