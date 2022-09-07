import { queryParams } from "@/utils/index";
import { get } from "@/utils/interceptors";
import { 
    GET_TEST_RESQUESTED,
    GET_TEST_SUCCES,
    GET_TEST_FAILED
} from "../constants";

const url = 'details'

const getDetails = (params) => {
    return get(`${url}${queryParams(params.page, params.limit)}`)
}