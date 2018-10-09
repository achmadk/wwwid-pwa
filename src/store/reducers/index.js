
import persistCombineReducers from 'redux-persist/es/persistCombineReducers'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'

import articles from './articles'

const storage = createWebStorage('local')

const persistConfig = {
  key: 'wwwid-react',
  storage
}
const reducers = persistCombineReducers(
  persistConfig,
  {
    articles
  }
)

export default reducers
