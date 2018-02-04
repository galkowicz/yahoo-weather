import {REQUEST_WEATHER, RECEIVE_WEATHER} from '../constants';

const reducer = (initialState = {}, action) => {

    let state = {celsius: [], fahrenheit: []};

    switch (action.type) {
        case REQUEST_WEATHER: {
            return Object.assign({}, state, action.payload);
        }

        case RECEIVE_WEATHER: {
            const unit =  action.unit;

            if (unit === 'c') {
                state = Object.assign({}, initialState, {celsius: action.payload})
            } else {
                state = Object.assign({}, initialState, {fahrenheit: action.payload})
            }

            return state;
        }

        default:
            state =  initialState;
    }

    return state;
};

export default reducer;