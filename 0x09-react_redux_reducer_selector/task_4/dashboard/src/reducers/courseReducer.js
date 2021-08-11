import * as types from '../actions/courseActionTypes';

const initialState = [];

export function courseReducer(state = initialState, action) {
    if (action === undefined) return state;

    switch (action.type) {
        case types.FETCH_COURSE_SUCCESS:
            return action.data.map((course) => ({...course, isSelected: false}));

        case types.SELECT_COURSE:
            state[action.index].isSelected = true;
            return state;

        case types.UNSELECT_COURSE:
            state[action.index].isSelected = false;
            return state;

        default:
            return state;
    }
}
