import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { autohydrate , persitStore } from 'redux-persist'

import reducers from '../reducers'




const configureStore = () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger),

  )
  
  return store 
}


export default configureStore
