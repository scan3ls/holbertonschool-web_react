import { mapStateToProps } from "./App";
import { fromJS } from 'immutable';
import assert from 'assert';

describe('Redux Connection', () => {
    describe('mapStateToProps', () => {
        it('isLoggedIn', () => {
            const state = (loggedIn) => (fromJS({isUserLoggedIn: loggedIn}));
    
            let received = mapStateToProps(state(true));
            assert.equal(received.isLoggedIn, true);
    
            received = mapStateToProps(state(false));
            assert.equal(received.isLoggedIn, false);
        });

        it('drawerDispaly', () => {
            const state = (visible) => (fromJS({isNotificationDrawerVisible: visible}));

            let received = mapStateToProps(state(false));
            assert.equal(received.displayDrawer, false);

            received = mapStateToProps(state(true));
            assert.equal(received.displayDrawer, true);
        });
    });
});
