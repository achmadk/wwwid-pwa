import { combineReducers } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/es/storage'

import articles from './articles'

const persistConfig = {
  key: 'wwwid-react',
  storage
}
const reducers = persistReducer(
  persistConfig,
  combineReducers({
    articles
  })
)

export default reducers
