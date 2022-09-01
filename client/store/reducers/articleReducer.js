import { GET_ARTICLES_FAILED, GET_ARTICLES_REQUESTED, GET_ARTICLES_SUCCESS } from "../constants"

const initialState = {
  articles: [],
  article: {
    name: '',
    slug: '',
    body: ''
  }
}

export const articles = (state = initialState, action) => {
  const data = action?.payload
  switch (action.type) {
    case GET_ARTICLES_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: data
      }
    case GET_ARTICLES_FAILED:
      return {
        ...state,
        loading: false,
        error: data,
      }
    case 'ARTICLE_DETAIL':
      return {
        ...state,
        article: {
          name: data?.name,
          slug: data?.slug,
          body: data?.body
        }
      }

    default:
      return state
  }
}
