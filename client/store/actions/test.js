import { GET_TEST_RESQUESTED } from "../constants"

export const getDetails = (params) => {
    return (dispatch) => {
        return dispatch({ type: GET_TEST_RESQUESTED, payload: params})
    }
}