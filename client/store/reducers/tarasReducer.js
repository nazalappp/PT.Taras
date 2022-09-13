import { 
    GET_TARAS_RESQUESTED,
    GET_TARAS_SUCCESS,
    GET_TARAS_FAILED
} from "../constants";

const initialState = {
    arenas: [],
    articles: [],
    sliders: [],
    loading: false
}

export const taras = (state = initialState, action) => {
    const data = action?.payload
    switch (action.type) {
        case GET_TARAS_RESQUESTED:
            return {
                ...state,
                loading: true
            }
        case GET_TARAS_SUCCESS:
            return {
                ...state,
                arenas: data,
                articles: data,
                sliders: data,
                loading: false
            }
        case GET_TARAS_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}