import * as types from './uiActionTypes';
import { bound, ping } from './totallyLegitFunctions';
import {uiStore as store} from '../index';

export function login(email, password) {
    const type = types.LOGIN;
    return {type, user: {email, password}};
}

export function logout() {
    const type = types.LOGOUT;
    return {type};
}

export function displayNotificationDrawer() { 
    const type = types.DISPLAY_NOTIFICATION_DRAWER;
    return {type};
}

export function hideNotificationDrawer() {
    const type = types.HIDE_NOTIFICATION_DRAWER;
    return {type};
}

export function loginSuccess() {
    const type = types.LOGIN_SUCCESS;
    return {type};
}

export function loginFailure() {
    const type = types.LOGIN_FAILURE;
    return {type};
}

export function loginRequest(email, password) {
    store.dispatch(login(email, password));
    const promise = ping('https://www.totalLegitUrl');

    return (dispatch) => {
        return promise
        .then(res => res.json())
        .then(data => {
            console.log(`Data: ${JSON.stringify(data, null, 2)}`);
            dispatch(loginSuccess());
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            dispatch(loginFailure());
        });
    };
}
