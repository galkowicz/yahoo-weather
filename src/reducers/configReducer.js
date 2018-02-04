import {SET_CONFIG, SET_CONFIG_UNIT, SET_CONFIG_VIEW_TYPE} from '../constants';


const reducer = (initialState = {}, action) => {

    let state = Object.assign({}, initialState);

    switch (action.type) {
        case SET_CONFIG: {
            const {myStorage} = action.payload;

            state = Object.assign({}, initialState,
                {unitType: myStorage.yahooWeatherUnit || ''},
                {viewType: myStorage.yahooWeatherViewType || ''});

            return state;
        }

        case SET_CONFIG_UNIT: {

            state = Object.assign({}, initialState,
                {unitType: action.payload});

            return state;
        }

        case SET_CONFIG_VIEW_TYPE: {

            state = Object.assign({}, initialState,
                {viewType: action.payload});

            return state;
        }

        default:
            state = initialState;
    }

    return state;
};

export default reducer;