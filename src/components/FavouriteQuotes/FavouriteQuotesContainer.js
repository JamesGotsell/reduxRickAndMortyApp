import { connect } from 'react-redux'

import * as actions from '../../actions'
import React from 'react'
 import FavouriteQuoteList from './FavouriteQuoteList'
import FavouriteQuoteListItem from './FavouriteQuoteListItem';
 /* eslint-disable-line no-lone-blocks */


class FavouriteQuoteContainer extends React.Component {
    constructor(props){
       super(props)
       console.log(this.props)
    } 

    render() {
       const { favouritequotes } = this.props
      //console.log(favouritequotes)
      return (  
          
        favouritequotes.map((favouritequote , i ) => {
              return <FavouriteQuoteListItem  key={i} qoute={favouritequote .quotes} id={favouritequote.id} />
            })
          
      )
    }
  }

  const mapStateToProps = state => ({
    favouritequotes: state.favoriteQuotes
  })

  const mapDispatchToProps = dispatch => ({
    dispatch
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FavouriteQuoteContainer)