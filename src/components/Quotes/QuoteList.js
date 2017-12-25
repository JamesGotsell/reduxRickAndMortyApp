import React from 'react'
import QuoteListItem from './QuoteListItem';

const QuoteList = ({quotes=[]}) => {
    
            debugger;
            if (quotes.length > 0 ) {
            return (
                 <QuoteListItem quotes={quotes}  />
                 
                )
         } else {
               return null;
        }
}

export default QuoteList