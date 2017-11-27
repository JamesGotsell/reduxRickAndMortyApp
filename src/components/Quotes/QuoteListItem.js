import React, {Component} from 'react'


class QuoteListItem  extends Component {

  constructor(props) {
    super(props)
        console.log(this.props.quote)
    }
   

  render(){
      
    return (
           <div className="quote-item">
                <p>{this.props.quote}</p>
           </div>
    )
  }
    
    
}

export default QuoteListItem