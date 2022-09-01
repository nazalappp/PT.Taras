import { GET_ARTICLES_REQUESTED } from '../constants'

import { get } from '@/utils/interceptors'

const url = 'articles/'

export const articleDetail = (payload) => {
  return (dispatch) => {
    return get(`${url}${payload}`)
      .then((res) => {
        dispatch({ type: 'ARTICLE_DETAIL' })
        return res?.data
      })
      .catch((err) => {
        return err?.response
      })
  }
}

export const getArticles = (params) => {
  return (dispatch) => {
    return dispatch({ type: GET_ARTICLES_REQUESTED, payload: params })
  }
}
