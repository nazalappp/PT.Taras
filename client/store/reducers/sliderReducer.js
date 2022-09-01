import {
  GET_SLIDER_FAILED,
  GET_SLIDER_REQUESTED,
  GET_SLIDER_SUCCESS
} from '../constants'

const initialState = {
  sliders: [],
  loading: false,
  error: null
}

export const sliders = (state = initialState, action) => {
  const data = action?.payload
  switch (action.type) {
    case GET_SLIDER_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case GET_SLIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        sliders: data
      }
    case GET_SLIDER_FAILED:
      return {
        ...state,
        loading: false,
        error: data,
      }
    default:
      return state
  }
}
