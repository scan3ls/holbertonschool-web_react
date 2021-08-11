import { courseReducer } from './courseReducer';
import * as validActions from '../actions/courseActionCreators';
import * as invalidActions from '../actions/uiActionCreator';
import assert from 'assert';
import {listCourses} from '../utils';

describe('Course Reducer', () => {
    describe('Invalid actions', () => {
        it('No action', () => {
            const state = courseReducer(undefined, undefined);

            assert.equal(state.length, 0);
        });

        it('Invalid type', () => {
            const state = courseReducer(undefined, invalidActions.login());
            assert.equal(state.length, 0);
        });
    });

    describe('Valid actions', () => {
        it('Fetch Course Success', () => {
            const state = courseReducer(undefined, {type: 'FETCH_COURSE_SUCCESS', data: listCourses});
            state.forEach((course) => {
                assert.equal(course.isSelected, false);
            });
        });

        it('Select Course', () => {
            let state = courseReducer(undefined, {type: 'FETCH_COURSE_SUCCESS', data: listCourses});
            assert.equal(state[1].isSelected, false);
            state = courseReducer(state, validActions.selectCourse(1));
            assert.equal(state[1].isSelected, true);
        });

        it('Unselect Course', () => {
            let state = courseReducer(undefined, {type: 'FETCH_COURSE_SUCCESS', data: listCourses});
            assert.equal(state[1].isSelected, false);
            state = courseReducer(state, validActions.selectCourse(1));
            assert.equal(state[1].isSelected, true);

            state = courseReducer(state, validActions.unSelectCourse(1));
            assert.equal(state[1].isSelected, false);
        });
    });
});
