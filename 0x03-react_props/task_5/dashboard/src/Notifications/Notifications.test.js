import React from 'react';
import { shallow, render } from 'enzyme';
import Notifications from './Notifications';
import assert from 'assert';

describe('Notifications', () => {
    it('Renders', () => {
        const wrapper = shallow(<Notifications />);
        assert.equal(true, true);
    });

    it('Here is the list message', () => {
        const wrapper = render(<Notifications />);
        const message = wrapper.find('.Notifications p')[0].children[0];
        assert.equal(message.data, 'Here is the list of notifications');
    });

    it('Has three list elements', () => {
        const wrapper = render(<Notifications />);
        const list = wrapper.find('.Notifications ul')[0]
        const listItems = list.children;
        assert.equal(listItems.length, 3);
    });
});
