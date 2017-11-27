import React from 'react'
import QuoteListItem from './QuoteListItem';

const QuoteList = ({quotes}) => {
  
        { 
        return  quotes.map( ( quote , i ) => {
            if (quotes.length > 0) {
            return (
                 <QuoteListItem  />
                 
                )
         } else {
               return null;
        }
      })
    } 

}

export default QuoteList