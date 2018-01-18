import React from 'react'
import FavouriteQuoteListItem from './FavouriteQuoteListItem';
import configureStore from '../../store/configureStore';

const FavouriteQuoteList = ({quotes}) => {

            console.log(quotes)
            if (quotes.length > 0 ) {
            return (
                 <FavouriteQuoteListItem quotes={quotes}  />
                )
         } else {
               return null;
        }
}

export default FavouriteQuoteList