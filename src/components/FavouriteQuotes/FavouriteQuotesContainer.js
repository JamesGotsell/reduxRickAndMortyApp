import { connect } from 'react-redux'

import * as actions from '../../actions'
import React from 'react'
 /* eslint-disable-line no-lone-blocks */
// import FavouriteQuoteList from './QuoteList'

class FavouriteQuoteContainer extends React.Component {
    constructor(props){
       super(props)
       console.log(props)
    }


    componentWillMount() {
      debugger;
        this.props.dispatch(actions.receiveFavouriteQuotes)
    }
  
    render() {
      const { favouritequotes } = this.props
      console.log(favouritequotes)
      return (
         <div> boom</div>
        // <FavouriteQuoteList key={1} quotes={quotes} />
      )
    }
  }

  const mapStateToProps = state => ({
    favouritequotes: state.favouritequotesList
  })

  const mapDispatchToProps = dispatch => ({
    dispatch
  })
  

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FavouriteQuoteContainer)