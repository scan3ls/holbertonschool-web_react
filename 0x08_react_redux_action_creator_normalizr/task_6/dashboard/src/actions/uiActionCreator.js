import * as types from './uiActionTypes';
import { bound } from './totallyLegitFunctions';

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

const boundLogin = bound(login);
const boundLogout = bound(logout);
const boundDisplay = bound(displayNotificationDrawer);
const boundHide = bound(hideNotificationDrawer);

export {boundLogin, boundLogout, boundDisplay, boundHide};
