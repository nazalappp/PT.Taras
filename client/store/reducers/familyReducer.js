import { 
    GET_FAMILY_RESQUESTED,
    GET_FAMILY_SUCCES,
    GET_ARENAS_FAILED
} from "../constants";

const initialState = {
    loading: false,
    father_name: "",
    mother_name: "",
    child_name: {
        brother_name: "",
        little_brotherName: "",
        sister_name: "",
        little_sisterName: "",
    },
    error: null
}

export const family = (state = initialState, action) => {
    const data = action?.payload
    switch(action.type){
        case GET_FAMILY_RESQUESTED:
            return{
                ...state,
                loading: true
            }
        case GET_FAMILY_SUCCES:
            return{
                ...state,
                loading: false,
                father_name: data.father_name,
                mother_name: data.mother_name,
                child_name: data.child_name,
                brother_name: data.brother_name,
                little_brotherName: data.little_brotherName,
                sister_name: data.sister_name,
                little_sisterName: data.little_sisterName
            }
        case GET_ARENAS_FAILED:
            return{
                ...state,
                loading: false,
                error: data,
            }
        default:
            return state
    }
}