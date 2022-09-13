import { 
    GET_TARAS_RESQUESTED
} from "../constants";

export const getTaras = (params) => {
    return (dispatch) => {
        return dispatch({
            type: GET_TARAS_RESQUESTED,
            payload: params
        })
    }
}