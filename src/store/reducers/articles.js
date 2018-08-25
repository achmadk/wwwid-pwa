import { GET_ARTICLES } from '../actions/articles'

const initialState = {
  data: []
}

export default function actionReducers (state = initialState, action) {
  switch (action.type) {
    case `${GET_ARTICLES}_FULFILLED`:
      let { items } = action.payload.data
      let data = items.map(item => {
        let firstParDesc = item.description
          .match(/<p>.*.<\/p>/g)[0]
          .replace('<p>', '')
          .replace('</p>', '')
        let description = `${firstParDesc
          .split('. ')[0]}${firstParDesc.includes('. ') ? '.' : ''}`
        let thumbnail = `https://res.cloudinary.com/dqtlmyuyi/image/fetch/q_auto:good,f_auto,w_720,h_640,c_fill/${item.thumbnail}`
        console.log('thumbnail: ', thumbnail)
        return {
          ...item,
          // description
          description,
          thumbnail
        }
      })
      return {
        ...state,
        data
      }
    default:
      return state
  }
}
