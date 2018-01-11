import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from '../src/components/Root';
import registerServiceWorker from './registerServiceWorker';


import configureStore from '../src/store/configureStore'


const store = configureStore()


ReactDOM.render( <Root store = {store}/>, document.getElementById('root'));
    registerServiceWorker();
