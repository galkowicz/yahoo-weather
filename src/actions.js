import {TEL_AVIV_URL_IN_C, TEL_AVIV_URL_IN_F, REQUEST_WEATHER, RECEIVE_WEATHER} from './constants';

const mapUnitToUrl = {
    c: TEL_AVIV_URL_IN_C,
    f: TEL_AVIV_URL_IN_F
};

export function fetchPosts(unit) {
    return dispatch => {
        dispatch(requestWeather(unit));
        return fetch(`${mapUnitToUrl[unit]}`)
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json, unit)))
    }
}

function requestWeather(unit) {
    return {
        type: REQUEST_WEATHER,
        unit
    }
}

function receiveWeather(json, unit) {
    return {
        type: RECEIVE_WEATHER,
        payload: json.query.results.channel.item.forecast,
        receivedAt: Date.now(),
        unit
    }
}