import React from 'react'
import QuoteListItem from './QuoteListItem';

const QuoteList = ({quotes}) => {
          let quote = quotes;
          console.log(quote)
        { 
        return  quotes.map( (quote , i)  => {
              debugger;
            if (quotes.length > 0) {
            return (
                 <QuoteListItem quote={quote}  />
                 
                )
         } else {
               return null;
        }
      })
    } 

}

export default QuoteList