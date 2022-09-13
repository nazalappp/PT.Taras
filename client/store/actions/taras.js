import { 
    GET_TARAS_ARENA_RESQUESTED,
    GET_TARAS_ARTICLE_RESQUESTED,
    GET_TARAS_SLIDER_RESQUESTED
} from "../constants";

export const getTarasArena = (params) => {
    return (dispatch) => {
        return dispatch({
            type: GET_TARAS_ARENA_RESQUESTED,
            payload: params
        })
    }
}

export const getTarasArticle = (params) => {
    return (dispatch) => {
        return dispatch({
            type: GET_TARAS_ARTICLE_RESQUESTED,
            payload: params
        })
    }
}

export const getTarasSlider = (params) => {
    return (dispatch) => {
        return dispatch({
            type: GET_TARAS_SLIDER_RESQUESTED,
            payload: params
        })
    }
}