import {  RECEIVE_FAVOURITE_QUOTES, ADD_QUOTE, DELETE_FAVOURITE_QUOTES } from '../actions'

/*
reducers should do 3 things:
    1. Set the default state
    2. Handle an action by checking the type and return a new state WITHOUT mutating the state
    3. Return the default state if no action is handled
*/

const favoriteQuotes = (state = [], action) => {
    switch (action.type) {
      // case RECEIVE_FAVOURITE_QUOTES:
      //   return [...state, ...action.receiveFavouriteQuotes]
      // case ADD_QUOTE: {
      //    return {...state, ...action.addQuote }}
      // } 
      // case DELETE_FAVOURITE_QUOTES:
      //   return [...state, action.deleteQuote]
      default:
        return state
    }
  }
  
  export default favoriteQuotes