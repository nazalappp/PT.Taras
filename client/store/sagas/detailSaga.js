import { call, put, takeEvery } from '@redux-saga/core/effects'
import { queryParams } from "@/utils/index";
import { get } from "@/utils/interceptors";
import { 
    GET_TEST_RESQUESTED,
    GET_TEST_SUCCES,
    GET_TEST_FAILED
} from "../constants";

const url = 'arenas'

const getDetails = (params) => {
    return get(`${url}${queryParams(params.page, params.limit)}`)
}

function* fetchDetails (action){
    try {
        const res = yield call(getDetails, action?.payload)
        if (res) {
            yield put({
                type: GET_TEST_SUCCES,
                payload: res?.data?.data
            })
        }
    } catch (err){
        yield put({
            type: GET_TEST_FAILED,
            payload: 'somethings wrong'
        })
    }
}

function* detailSaga (){
    yield takeEvery(GET_TEST_RESQUESTED, fetchDetails)
}

export default detailSaga