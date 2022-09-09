import { 
    GET_TEST_RESQUESTED, 
    GET_TEST_SUCCES, 
    GET_TEST_FAILED 
} from "../constants"

const initialState = {
    loading: false,
    name: "",
    age: "",
    arenas: []
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
                arenas: data
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