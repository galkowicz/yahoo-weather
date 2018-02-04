import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import {SET_CONFIG} from './constants';

import registerServiceWorker from './registerServiceWorker';

let myStorage = window.localStorage;

store.dispatch({type: SET_CONFIG, payload: {myStorage}});

ReactDOM.render(
    <Provider store={store}>
        <div><App/></div>
    </Provider>
    ,
    document.getElementById('root'));


registerServiceWorker();
