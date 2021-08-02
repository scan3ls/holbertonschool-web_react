import * as types from './uiActionTypes';

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
