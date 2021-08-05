import * as types from '../actions/uiActionTypes';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLogginIn: false,
    user: {}
};

function uiReducer(state = initialState, action) {
    switch (action.type) {
        case types.DISPLAY_NOTIFICATION_DRAWER:
            return {...state,isNotificationDrawerVisible: true};

        case types.HIDE_NOTIFICATION_DRAWER:
            return {...state, isNotificationDrawerVisible: false};

        case types.LOGIN_SUCCESS:
            return {...state, isUserLogginIn: true};

        case types.LOGIN_FAILURE:
            return {...state, isUserLogginIn: false};

        case types.LOGOUT:
            return {...state, isUserLogginIn: false};

        default:
            return {...state};
    }
}

export default uiReducer;
