import { combineReducers } from 'redux'

import quotesList from './quotesList';
import favoriteQuotes from './favoriteQuotes'
const reducers = combineReducers({
   quotesList,
   favoriteQuotes 
})

export default reducers