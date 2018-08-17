import combineReducers from 'redux/src/combineReducers'
import persistReducer from 'redux-persist/lib/persistReducer'
import storage from 'redux-persist/lib/storage'

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
