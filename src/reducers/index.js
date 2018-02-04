import { combineReducers } from 'redux';
import configReducer from './configReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    config: configReducer,
    weather: weatherReducer
});