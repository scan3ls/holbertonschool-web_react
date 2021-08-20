import * as types from '../actions/notificationActionTypes';
import { notificationsNormalizer, normalizeData } from '../schema/notifications';
import { Map } from 'immutable';

const initialState = Map({
    notifications: [],
    filter: '',
    loading: false
});

export function notificationReducer(state = initialState, action) {
    if (action === undefined) return state;

    switch (action.type) {
        case types.FETCH_NOTIFICATIONS_SUCCESS:
            const data = notificationsNormalizer(action.data.map((item) => ({...item, isRead: false})));
            const notifications = data.entities.notifications;
            return state.mergeDeep(Map({filter: "DEFAULT", notifications}));

        case types.MARK_AS_READ:
            return state.setIn(['notifications', action.index, 'isRead'], true);

        case types.SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        case types.SET_LOADING_STATE:
            return state.set('loading', action.state);

        default: return state;
    }
}

export {initialState};
