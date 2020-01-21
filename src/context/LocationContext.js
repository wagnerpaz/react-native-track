import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch(action.type) {
        case 'change_name':
            return {...state, name: action.payload};
        case 'add_current_location':
            return {...state,
                currentLocation: action.payload,
                initialLocation: !state.initialLocation ? action.payload : state.initialLocation
            };
        case 'add_location':
            return {...state, locations: [...state.locations, action.payload]};
        case 'start_recording':
            return {...state, recording: true};
        case 'stop_recording':
            return {...state, recording: false};
        default:
            return state;
    }
};

const changeName = dispatch => name => {
    dispatch({type: 'change_name', payload: name});
}

const startRecording = dispatch => () => {
    dispatch({type: 'start_recording'});
};

const stopRecording = dispatch => () => {
    dispatch({type: 'stop_recording'});
};

const addLocation = dispatch => (location, recording) => {
    dispatch({type: 'add_current_location', payload: location});
    if(recording) {
        dispatch({type: 'add_location', payload: location});
    }
};

export const {Provider, Context} = createDataContext(locationReducer, {
    changeName,
    startRecording,
    stopRecording,
    addLocation,
}, {
    name: '',
    recording: false,
    locations: [],
    currentLocation: null,
    initialLocation: null,
});