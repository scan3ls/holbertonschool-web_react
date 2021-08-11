import * as types from '../actions/notificationActionTypes';

const initialState = {
    notifications: [],
    filter: ''
};

export function notificationReducer(state = initialState, action) {
    if (action === undefined) return state;

    switch (action.type) {
        case types.FETCH_NOTIFICATIONS_SUCCESS:
            const {data, type} = action;

            return {filter: 'DEFAULT', notifications: data.map((item) => ({...item, isRead: false}) )};

        case types.MARK_AS_READ:
            state.notifications[action.index].isRead = true;
            return state;

        case types.SET_TYPE_FILTER:
            state.filter = action.filter;
            return state;

        default: return state;
    }
}

export {initialState};
