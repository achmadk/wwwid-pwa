import API from '../../api'

export const GET_ARTICLES = 'GET_ARTICLES'

export const getArticles = () => dispatch => dispatch({
  type: GET_ARTICLES,
  async payload () {
    return API.get('/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
  }
})
