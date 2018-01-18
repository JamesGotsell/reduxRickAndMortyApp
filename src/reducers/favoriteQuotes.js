import {
  RECEIVE_FAVOURITE_QUOTES,
  ADD_QUOTE,
  DELETE_FAVOURITE_QUOTES
} from '../actions'


const favoriteQuotes = (state = [], action) => {
  switch (action.type) {
    case ADD_QUOTE:
      {
        return [...state, {
          quotes: action.quote,
          id: action.id
        }]
      }
      case DELETE_FAVOURITE_QUOTES:
        let quote = action;
        return state.filter(quote => quote.id !== action.id)
    default:
      return state
  }
}

export default favoriteQuotes
