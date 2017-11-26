import { connect } from 'react-redux'

import * as actions from '../../actions'
import React from 'react'

class QuoteContainer extends React.Component {

    constructor(props){
       super(props)
    }


    componentDidMount() {
        this.props.dispatch(actions.getQuotes)
    }
  
    render() {
      return (
        <div>
          {/* { this.props.quotes.data.map( (quote, i) => (
            <div className="row" key={i}>
           
              <div className="col-md-8">
                <p>{quote}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => this.props.dispatch(actions.ADD_QUOTE(quote))}
                >
                  Buy me!
                </button>
                <hr />
              </div>
            </div> 
          ))} */}
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    quotes: state.quotes
    
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