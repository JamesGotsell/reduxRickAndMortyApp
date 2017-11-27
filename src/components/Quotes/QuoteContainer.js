import { connect } from 'react-redux'

import * as actions from '../../actions'
import React from 'react'
 /* eslint-disable-line no-lone-blocks */
import QuoteList from './QuoteList'

class QuoteContainer extends React.Component {

    constructor(props){
       super(props)
       console.log(props)
    }


    componentWillMount() {
        this.props.dispatch(actions.getQuotes)
    }
  
    render() {
      const { quotes } = this.props
      return (
        <QuoteList key={1} quotes={quotes} />
      )
    }
  }

  const mapStateToProps = state => ({
    quotes: state.favoritesQuotesList
    
  })

  const mapDispatchToProps = dispatch => ({
    dispatch
  })
  
  /*
  SOME EXPLANATION AND TIPS ABOUT USING CONNECT
  // this is the simplest way to connect our component to the store.dispatch method
  const mapDispatchToProps = dispatch => ({
    dispatch
  })
  // we can also connect directly an action with dispatch by doing this
  const mapDispatchToProps = dispatch => ({
    dispatchReceiveBeers: beers => {
      dispatch(actions.receiveBeers(beers))
    }
  })
  // then instead of doing this
  this.props.dispatch(actions.receiveBeers(beers))
  // we can simply do this
  this.props.dispatchReceiveBeers(beers)
  // the following technique is not implemented in our simplified react-redux,
  // import { connect } from 'react-redux' to use this the following (recommended)
  const mapDispatchToProps = {
    dispatchReceiveBeers: actions.receiveBeers
  }
  */
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuoteContainer)