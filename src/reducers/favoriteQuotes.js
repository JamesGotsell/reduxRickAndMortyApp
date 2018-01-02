import {  RECEIVE_FAVOURITE_QUOTES, ADD_QUOTE, DELETE_FAVOURITE_QUOTES } from '../actions'



const favoriteQuotes = (state = [], action) => {
    switch (action.type) {
      case RECEIVE_FAVOURITE_QUOTES:
        return [...state, action.receiveFavouriteQuotes]
      case ADD_QUOTE: {
         return [...state, { quotes: action.quote, id: action.id}]
          
      } 
      // case DELETE_FAVOURITE_QUOTES:
      //   return [...state, action.deleteQuote]
      default:
        return state
    }
  }
  
  export default favoriteQuotes