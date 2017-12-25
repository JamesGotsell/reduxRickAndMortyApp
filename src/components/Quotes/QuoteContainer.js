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
      console.log(quotes)
      return (
        <QuoteList key={1} quotes={quotes} />
      )
    }
  }

  const mapStateToProps = state => ({
    quotes: state.quotesList
    
  })

  const mapDispatchToProps = dispatch => ({
    dispatch
  })
  

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuoteContainer)