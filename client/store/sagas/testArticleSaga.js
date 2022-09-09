import { call, put, takeEvery } from '@redux-saga/core/effects'
import { queryParams } from "@/utils/"
import { get } from "@/utils/interceptors"
import { 
    GET_TESTARTICLE_RESQUESTED,
    GET_TESTARTICLE_SUCCES,
    GET_TESTARTICLE_FAILED 
} from "../constants";

const url = 'articles'

const getTestArticles = (params) => {
    return get(`${url}${queryParams(params.page, params.limit)}`)
}

function* fetchTestArticles (action) {
    try {
        const res = yield call(getTestArticles, action?.payload)

        if (res) {
            yield put({
                type: GET_TESTARTICLE_SUCCES,
                payload: res?.data?.data
            })
        }
    } catch (err) {
        yield put({
            type: GET_TESTARTICLE_FAILED,
            payload: 'somethings wrong'
        })
    }
}

function* testArticleSaga () {
    yield takeEvery(GET_TESTARTICLE_RESQUESTED, fetchTestArticles)
}

export default testArticleSaga