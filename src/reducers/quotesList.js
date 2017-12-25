import { RECEIVE_QUOTES} from '../actions'

/*
reducers should do 3 things:
    1. Set the default state
    2. Handle an action by checking the type and return a new state WITHOUT mutating the state
    3. Return the default state if no action is handled
*/

const quotesList = (state = [], action) => {
    switch (action.type) {
      case RECEIVE_QUOTES:
      return [...state, action.quotes.data ]
      default:
        return state
    }
  }
  
  export default quotesList