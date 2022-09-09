import { GET_TESTARTICLE_RESQUESTED } from "../constants";

export const getTestArticles = (params) => {
    return (dispatch) => {
        return dispatch({ type: GET_TESTARTICLE_RESQUESTED, payload: params})
    }
}