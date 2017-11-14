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
