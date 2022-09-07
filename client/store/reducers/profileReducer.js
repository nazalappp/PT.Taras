import { 
    GET_PROFILE_RESQUESTED,
    GET_PROFILE_SUCCES,
    GET_PROFILE_FAILED,
    CREATE_PROFILE_RESQUESTED,
    CREATE_PROFILE_SUCCES,
    CREATE_PROFILE_FAILED,
    UPDATE_PROFILE_RESQUESTED,
    UPDATE_PROFILE_SUCCES,
    UPDATE_PROFILE_FAILED,
    DELETE_PROFILE_RESQUESTED,
    DELETE_PROFILE_SUCCES,
    DELETE_PROFILE_FAILED
} from "../constants";

const initialState = {
    loading: false,
    name: "",
    age: "",
    birthdate: "",
    address: "",
    phone_number: "",
    religion: "",
    error: null
}

export const profile = (state = initialState, action) => {
    const data = action?.payload
    switch(action.type){
        case GET_PROFILE_RESQUESTED:
            return{
                ...state,
                loading: true
            }
        case GET_PROFILE_SUCCES:
            return{
                ...state,
                loading: false,
                name: data.name,
                age: data.age,
                birthdate: data.birthdate,
                address: data.address,
                phone_number: data.phone_number,
                religion: data.religion
            }
        case GET_PROFILE_FAILED:
            return{
                ...state,
                loading: false,
                error: data,
            }
        case CREATE_PROFILE_RESQUESTED:
            return{
                ...state,
                loaing: true
            }
        case CREATE_PROFILE_SUCCES:
            return{
                ...state,
                loading: false
            }
        case CREATE_PROFILE_FAILED:
            return{
                ...state,
                loading: false
            }
        case UPDATE_PROFILE_RESQUESTED:
            return{
                ...state,
                loading: true
            }
        case UPDATE_PROFILE_SUCCES:
            return{
                ...state,
                loading: false
            }
        case UPDATE_PROFILE_FAILED:
            return{
                ...state,
                loading: false,
                error: data,
            }
        case DELETE_PROFILE_RESQUESTED:
            return{
                ...state,
                loading: true
            }
        case DELETE_PROFILE_SUCCES:
            return{
                ...state,
                loading: false
            }
        case DELETE_PROFILE_FAILED:
            return{
                ...state,
                loading: false,
                error: data,
            }
    }
}