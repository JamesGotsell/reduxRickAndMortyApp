

export const RECEIVE_QUOTES = 'RECEIVE_QUOTES'

export const RECEIVE_FAVOURITE_QUOTES = 'RECEIVE_FAVOURITE_QUOTES'

export const ADD_QUOTE = 'ADD_QUOTE'

export const DELETE_FAVOURITE_QUOTES = 'DELETE_FAVOURITE_QUOTES'

const ROOT_URL = 'http://loremricksum.com/api/?paragraphs=4&quotes=1';


export const getQuotes = dispatch => {
    fetch(ROOT_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(receiveQuotes(data));
  })
  .catch((err) => {
    console.log(err)
  })    
}
  

export const receiveQuotes = quotes => ({
    type:RECEIVE_QUOTES,
    quotes
})


export const receivefavoriteQuotes = quotes => ({
  type:RECEIVE_FAVOURITE_QUOTES,
  quotes
})

export const receiveFavouriteQuotes = dispatch => ({
  //  dispatch(receivefavoriteQuotes());
})

export const addQuote = (quote,id) => ({
    type: ADD_QUOTE,
    quote,
    id
})

export const deleteQuote = quote => ({
  type: DELETE_FAVOURITE_QUOTES,
  quote
})