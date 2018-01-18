import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'


class FavouriteQuoteListItem extends Component {

  constructor(props) {    
    super(props)
    console.log(props)
    
    this.deleteQuote = this.deleteQuote.bind(this)
  }

  deleteQuote (qoute, id) {
     this.props.dispatch(actions.deleteQuote(qoute, id))
  }

  render(){
      const { qoute , id}  = this.props;
      return (
          <div key={id}>
            <p>{qoute}</p>
            <pre>{id}</pre>
            <button onClick={() => { this.deleteQuote(qoute, id)} }>delete Quote</button>
           </div>
     ) 
  }   
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapDispatchToProps
)(FavouriteQuoteListItem)
