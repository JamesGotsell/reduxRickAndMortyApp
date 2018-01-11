import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'


class favouriteQuoteListItem extends Component {

  constructor(props) {    
    super(props)
  }

  render(){
      const { quotes}  = this.props;
      return (
           <div className="quote-item">
              <ul>
                  {
                      quotes.map( (quotes, i ) => {
                      return (  
                                <li key={i+1}>
                                    <p key={quotes.id}>{quotes.quotes}</p>
                                 </li>
                        )
                       
                      }) 

                  }
               </ul>     
           </div>
     ) 
  }   
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapDispatchToProps
)(favouriteQuoteListItem)
