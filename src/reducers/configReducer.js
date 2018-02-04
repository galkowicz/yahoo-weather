import {SET_CONFIG} from '../constants';


const reducer = (initialState = {}, action) => {

    let state = Object.assign({}, initialState);

    switch (action.type) {
        case SET_CONFIG: {
            const {myStorage} = action.payload;

            state = Object.assign({}, initialState,
                {storageUnit: myStorage.yahooWeatherUnit || ''},
                {storageViewType: myStorage.yahooWeatherViewType || ''});

            return state;
        }

        default:
            state = initialState;
    }

    return state;
};

export default reducer;