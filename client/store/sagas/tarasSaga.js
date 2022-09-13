import { call, put, takeEvery } from '@redux-saga/core/effects';
import { queryParams } from "@/utils/";
import { get } from "@/utils/interceptors";
import { 
    GET_TARAS_RESQUESTED,
    GET_TARAS_SUCCESS,
    GET_TARAS_FAILED 
} from "../constants";

const url = 'articles'

const getTaras = (params) => {
    return get(`${url}${queryParams(params.page, params.limit)}`)
}

function* fetchTaras (action){
    try {
        const res = yield call(getTaras, action?.payload)

        if (res) {
            yield put({
                type: GET_TARAS_SUCCESS,
                payload: res?.data?.data
            })
        }
    }catch (err) {
        yield put({
            type: GET_TARAS_FAILED,
            payload: 'somethings wrong'
        })
    }
}

function* tarasSaga () {
    yield takeEvery(GET_TARAS_RESQUESTED, fetchTaras)
}

export default tarasSaga