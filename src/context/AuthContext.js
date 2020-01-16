import {AsyncStorage} from 'react-native';

import {navigate} from '../navigationRef';
import createDataContext from '../context/createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMsg: action.payload};
        case 'clear_errormsg':
            return {...state, errorMsg: ''};
        case 'signup':
            return {token: action.payload, errorMsg: ''};
        case 'signin':
            return {token: action.payload, errorMsg: ''};
        case 'signout':
            return {...state, token: null};
        default:
            return state;
    }
};

const clearErrorMsg = dispatch => () => {
    dispatch({type: 'clear_errormsg'});
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
}

const signup = (dispatch) => async ({email, password}) => {
    try{
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signup', payload: response.data.token});
        navigate('TrackList');
    } catch(err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
    }
};

const signin = (dispatch) => async ({email, password}) => {
    try{
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');
    } catch(err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(authReducer, {
    clearErrorMsg,
    tryLocalSignin,
    signup,
    signin,
    signout,
}, {
    token: null,
    errorMsg: '',
});