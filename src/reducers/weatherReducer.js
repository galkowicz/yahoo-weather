import {REQUEST_WEATHER, RECEIVE_WEATHER} from '../constants';

const reducer = (initialState = {celsius: [], fahrenheit: []}, action) => {

    let state;

    switch (action.type) {
        case REQUEST_WEATHER: {
            return Object.assign({}, initialState, action.payload);
        }

        case RECEIVE_WEATHER: {
            const unit =  action.unit;

            if (unit === 'celsius') {
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