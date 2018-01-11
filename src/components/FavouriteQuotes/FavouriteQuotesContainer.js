import { connect } from 'react-redux'

import * as actions from '../../actions'
import React from 'react'
import favouriteQuoteList from './favouriteQuoteList'
 /* eslint-disable-line no-lone-blocks */
// import FavouriteQuoteList from './QuoteList'

class FavouriteQuoteContainer extends React.Component {
    constructor(props){
       super(props)
       console.log(this.props)
    } 

    render() {
      const { favouritequotes } = this.props
      console.log(favouritequotes)
      return (  
        <favouriteQuoteList key={1} quotes={favouritequotes} />
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