import {REQUEST_WEATHER, RECEIVE_WEATHER} from '../constants';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_WEATHER: {
            return Object.assign({}, state, action.payload);
        }
        case RECEIVE_WEATHER: {
            console.log(action.payload);
            return Object.assign({}, state, action.payload);
        }
        default:
            return state;
    }
};

export default reducer;