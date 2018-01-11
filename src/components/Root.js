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
            {/* <Route path="/" component={App} store={store} />
            <Route component={NotFound} /> */}
            <App store={store}/>
        </Switch>
    </Provider>
    </Router>
)

export default Root