import React, {Component} from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

import * as actions from '../../actions'

const Button = styled.button`
position: relative;
display: inline-block;
height: ${props => props.outline ? props.size : props.size/2}px;
width: ${props => props.outline ? props.size : props.size/2}px;
border-radius: 100%;
text-align: center;
color: ${props => props.color};
font-size: ${props => props.size / 2}px;
border: ${props => props.outline ? `solid 2px ${props.color}` : 0};
background: blue;
transition: all 0.3s ease-in-out;
&:hover, &:focus, &:active {
  color: #774EBD;
  background: ${props => props.outline ? props.color : 'transparent'};
}
& > i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}`

class QuoteListItem extends Component {

  constructor(props) {    
    super(props)
  }

  render(){
      const { quotes }  = this.props;
      return (
           <div className="quote-item">
              <ul>
                  {
                      quotes[0].map( (quote, i ) => {
                      return (  
                                <li key={i+1}>
                                    <p>{quote}</p>
                                    <Button 
                                    onClick={ () => { this.props.dispatch(actions.addQuote(quote, i+1)) }}> Add Quote</Button>
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
)(QuoteListItem)
