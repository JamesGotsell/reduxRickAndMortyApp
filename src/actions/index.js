export const RECEIVE_QUOTES = 'RECEIVE_QUOTES'

export const RECEIVE_FAVOURITE_QUOTES = 'RECEIVE_FAVOURITE_QUOTES'

export const ADD_QUOTE = 'ADD_QUOTE'

export const DELETE_FAVOURITE_QUOTES = 'DELETE_FAVOURITE_QUOTES'

export const receiveQuotes = quotes => ({
  type: RECEIVE_QUOTES,
  quotes
})

export const receiveFavouriteQuotes = quotes => ({
  type: RECEIVE_FAVOURITE_QUOTES,
  quotes
})

export const addQuote = quote => ({
    type: ADD_QUOTE,
    // quote id or something or get key set as id
    quote
})

export const deleteQuote = quote => ({
  type: DELETE_FAVOURITE_QUOTES,
  quote
})