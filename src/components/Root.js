import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import NotFound from './NotFound'

const Root = ({store}) => (
    <Router>
    <Provider store={store}>
        <Switch>
        <Route path="/" component= {App} />
        <Route component={NotFound} />
        </Switch>
    </Provider>
    </Router>
)

export default Root