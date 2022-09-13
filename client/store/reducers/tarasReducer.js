import { 
    GET_TARAS_ARENA_RESQUESTED,
    GET_TARAS_ARENA_SUCCESS,
    GET_TARAS_ARENA_FAILED,
    GET_TARAS_ARTICLE_RESQUESTED,
    GET_TARAS_ARTICLE_SUCCESS,
    GET_TARAS_ARTICLE_FAILED,
    GET_TARAS_SLIDER_RESQUESTED,
    GET_TARAS_SLIDER_SUCCESS,
    GET_TARAS_SLIDER_FAILED
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
        case GET_TARAS_ARENA_RESQUESTED:
            return {
                ...state,
                loading: true
            }
        case GET_TARAS_ARENA_SUCCESS:
            return {
                ...state,
                arenas: data,
                loading: false
            }
        case GET_TARAS_ARENA_FAILED:
            return {
                ...state,
                loading: false
            }
        case GET_TARAS_ARTICLE_RESQUESTED:
            return {
                ...state,
                loading: true
            }
        case GET_TARAS_ARTICLE_SUCCESS:
            return {
                ...state,
                articles: data,
                loading: false
            }
        case GET_TARAS_ARTICLE_FAILED:
            return {
                ...state,
                loading: false
            }
        case GET_TARAS_SLIDER_RESQUESTED:
            return {
                ...state,
                loading: true
            }
        case GET_TARAS_SLIDER_SUCCESS:
            return {
                ...state,
                sliders: data,
                loading: false
            }
        case GET_TARAS_SLIDER_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}