import {
  GET_ARENAS_FAILED,
  GET_ARENAS_REQUESTED,
  GET_ARENAS_SUCCESS
} from "../constants"

const initialState = {
  arenas: [],
  loading: false,
  error: null
}

export const arenas = (state = initialState, action) => {
  const data = action?.payload
  switch (action.type) {
    case GET_ARENAS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case GET_ARENAS_SUCCESS:
      return {
        ...state,
        loading: false,
        arenas: data
      }
    case GET_ARENAS_FAILED:
      return {
        ...state,
        loading: false,
        error: data,
      }
    default:
      return state
  }
}
