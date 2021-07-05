import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import assert from 'assert';

describe('Notifications', () => {
    it('Renders', () => {
        const wrapper = shallow(<Notifications />);
        assert.equal(true, true);
    });

    it('Here is the list message', () => {
        const wrapper = shallow(<Notifications />);
        const children = wrapper.render().children().toArray();
        const message = children[1].firstChild;
        assert.equal(message.data, 'Here is the list of notifications');
    });

    it('Has three list elements', () => {
        const wrapper = shallow(<Notifications />);
        const list = wrapper.render().children()['2'];
        const listItems = list.children;
        assert.equal(listItems.length, 3);
    });
});
