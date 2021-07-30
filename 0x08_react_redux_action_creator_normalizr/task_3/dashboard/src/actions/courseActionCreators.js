import * as types from './courseActionTypes';

export function selectCourse(index) {
    const type = types.SELECT_COURSE;
    return {type: type, index: index};
}

export function unSelectCourse(index) {
    const type = types.UNSELECT_COURSE;
    return {type: type, index: index};
}
