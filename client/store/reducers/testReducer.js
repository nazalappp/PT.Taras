import { GET_TEST_RESQUESTED, GET_TEST_SUCCES, GET_TEST_FAILED } from "../constants"

const initialState = {
    loading: false,
    name: "",
    age: ""
}

export const test = (state = initialState, action) => {
    const data = action?.payload
    switch(action?.type) {
        case GET_TEST_RESQUESTED:
            return{
                ...state,
                loading: true
            }
        case GET_TEST_SUCCES:
            return{
                ...state,
                loading: false,
                name: data.name,
                age: data.age
            }
        case GET_TEST_FAILED:
            return{
                ...state,
                loading: false
            }
        default:
            return state
        
    }
}