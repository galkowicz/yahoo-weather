export const SET_CONFIG = 'setConfig';
export const TEL_AVIV_URL_IN_C = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22tel%20aviv%2C%20il%22)%20and%20u%3D%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
export const TEL_AVIV_URL_IN_F = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22tel%20aviv%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const SET_CONFIG_UNIT = 'SET_CONFIG_UNIT';
export const SET_CONFIG_VIEW_TYPE = 'SET_CONFIG_VIEW_TYPE';

