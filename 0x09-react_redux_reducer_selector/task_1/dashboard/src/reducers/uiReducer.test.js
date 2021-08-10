import * as validActions from '../actions/uiActionCreator';
import * as invalidAction from '../actions/courseActionCreators';
import assert from 'assert';
import {initialState, uiReducer} from './uiReducer';

describe('basic reducer', () => {
    it('No action', () => {
        const state = uiReducer(undefined, undefined).toJSON();
        const recieved = JSON.stringify(state);
        const expected = JSON.stringify(initialState);

        assert.equal(recieved, expected);
    });

    it('Invalid Action', () => {
        const state = uiReducer(undefined, invalidAction.selectCourse(1)).toJSON();
        const recieved = JSON.stringify(state);
        const expected = JSON.stringify(initialState);

        assert.equal(recieved, expected);
    });

    it('Valid action', () => {
        const state = uiReducer(undefined, validActions.displayNotificationDrawer()).toJSON();
        const recieved = JSON.stringify(state);
        const expected = JSON.stringify({...initialState, isNotificationDrawerVisible: true});

        assert.equal(recieved, expected);
    });
});
