import React from 'react'
import favouriteQuoteListItem from './favouriteQuoteListItem';
import configureStore from '../../store/configureStore';

const favouriteQuoteList = ({quotes=[]}) => {

            console.log(quotes)
            if (quotes.length > 0 ) {
            return (
                 <favouriteQuoteListItem quotes={quotes}  />
                )
         } else {
               return null;
        }
}

export default favouriteQuoteList