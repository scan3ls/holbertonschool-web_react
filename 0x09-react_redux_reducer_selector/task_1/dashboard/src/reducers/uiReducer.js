import * as types from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLogginIn: false,
    user: {}
};

function uiReducer(state = initialState, action) {
    if (action === undefined) return Map({...state});

    switch (action.type) {
        case types.DISPLAY_NOTIFICATION_DRAWER:
            return Map({...state,isNotificationDrawerVisible: true});

        case types.HIDE_NOTIFICATION_DRAWER:
            return Map({...state, isNotificationDrawerVisible: false});

        case types.LOGIN_SUCCESS:
            return Map({...state, isUserLogginIn: true});

        case types.LOGIN_FAILURE:
            return Map({...state, isUserLogginIn: false});

        case types.LOGOUT:
            return Map({...state, isUserLogginIn: false});

        default:
            return Map({...state});
    }
}

export {uiReducer, initialState};
