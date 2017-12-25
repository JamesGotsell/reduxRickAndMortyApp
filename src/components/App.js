import React, { Component } from 'react';
import { Route, Switch ,   Link} from 'react-router-dom';
import Home from './Home/Home'
import QuotesContainer from './Quotes/QuoteContainer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Rick and Morty App</h1>
       
          
        </header>
        <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quotes">Rick and morty quotes</Link></li>
                        <li><Link to="/favouritequotes">your favourite quotes</Link></li>
                    </ul>
                    <div>
                    <ul>
                 <li> to do - create a list of quotes to display</li>
  <li>* qoute container that does - fetching of data </li>
 
  <li>* qoutelist will display all qoutes - done </li>
  <li>* qoutelist - each element that is displayed much contain a button that will allow user to add qoute to favoriteQuotes - store</li> 
  <li>- i need to dispatch the specific quote to update the favourite qoutes reducer to update the favoriteQuote state</li>
  <li>* as soon as use clicks adds to favoriteQuotesList</li> 
  <li>* within favoritesQuotesList - needs to display button to remove from list - state</li>


                  </ul>
                    </div>
         </nav>
                <div className="view-container" >
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/quotes" component={QuotesContainer} />
                  </Switch>
 
                </div>
      </div>
    );
  }
}

export default App;
