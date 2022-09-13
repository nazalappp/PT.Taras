import { call, put, takeEvery } from '@redux-saga/core/effects';
import { queryParams } from "@/utils/";
import { get } from "@/utils/interceptors";
import { 
    GET_TARAS_ARENA_RESQUESTED,
    GET_TARAS_ARENA_SUCCESS,
    GET_TARAS_ARENA_FAILED, 
    GET_TARAS_ARTICLE_RESQUESTED,
    GET_TARAS_ARTICLE_SUCCESS,
    GET_TARAS_ARTICLE_FAILED, 
    GET_TARAS_SLIDER_RESQUESTED,
    GET_TARAS_SLIDER_SUCCESS,
    GET_TARAS_SLIDER_FAILED
} from "../constants";

const url = 'articles'
const url1 = 'arenas'
const url2 = 'sliders'

const getTarasArena = (params) => {
    return get(`${url}${queryParams(params.page, params.limit)}`)
}

function* fetchTarasArena (action){
    try {
        const res = yield call(getTarasArena, action?.payload)

        if (res) {
            yield put({
                type: GET_TARAS_ARENA_SUCCESS,
                payload: res?.data?.data
            })
        }
    }catch (err) {
        yield put({
            type: GET_TARAS_ARENA_FAILED,
            payload: 'somethings wrong'
        })
    }
}

const getTarasArticle = (params) => {
    return get(`${url1}${queryParams(params.page, params.limit)}`)
}

function* fetchTarasArticle (action){
    try {
        const res = yield call(getTarasArticle, action?.payload)

        if (res) {
            yield put({
                type: GET_TARAS_ARTICLE_SUCCESS,
                payload: res?.data?.data
            })
        }
    }catch (err) {
        yield put({
            type: GET_TARAS_ARTICLE_FAILED,
            payload: 'somethings wrong'
        })
    }
}

const getTarasSlider = (params) => {
    return get(`${url2}${queryParams(params.page, params.limit)}`)
}

function* fetchTarasSlider (action){
    try {
        const res = yield call(getTarasSlider, action?.payload)

        if (res) {
            yield put({
                type: GET_TARAS_SLIDER_SUCCESS,
                payload: res?.data?.data
            })
        }
    }catch (err) {
        yield put({
            type: GET_TARAS_SLIDER_FAILED,
            payload: 'somethings wrong'
        })
    }
}

function* tarasSaga () {
    yield takeEvery(GET_TARAS_ARENA_RESQUESTED, fetchTarasArena)
    yield takeEvery(GET_TARAS_ARTICLE_RESQUESTED, fetchTarasArticle)
    yield takeEvery(GET_TARAS_SLIDER_RESQUESTED, fetchTarasSlider)
}

export default tarasSaga