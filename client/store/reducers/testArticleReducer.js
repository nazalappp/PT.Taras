import { 
    GET_TESTARTICLE_RESQUESTED,
    GET_TESTARTICLE_SUCCES,
    GET_TESTARTICLE_FAILED 
} from "../constants";

const initialState = {
    loading: false,
    name: "",
    age: "",
    articles: []
}

export const testArticle = (state = initialState, action) => {
    const data = action?.payload
    switch (action.type){
        case GET_TESTARTICLE_RESQUESTED:
            return {
                ...state,
                loading: true
            }
        case GET_TESTARTICLE_SUCCES:
            return {
                ...state,
                loading: false,
                articles: data
            }
        case GET_TESTARTICLE_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}