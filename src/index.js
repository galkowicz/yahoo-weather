import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import {SET_CONFIG} from './constants';

import registerServiceWorker from './registerServiceWorker';

store.dispatch({type: SET_CONFIG, payload: {}});

ReactDOM.render(
    <Provider store={store}>
        <div><App/></div>
    </Provider>
    ,
    document.getElementById('root'));


registerServiceWorker();
