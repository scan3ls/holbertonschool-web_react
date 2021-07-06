import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import assert from 'assert';

describe('CourseList', () => {
    it('Renders', () => {
        const wrapper = shallow(<CourseList />);
        assert.equal(wrapper.render().length !== 0, true);
    });

    it('Has five rows', () => {
        const wrapper = shallow(<CourseList />);
        const table = wrapper.render()['0'];
        const tr = [];
        table.children.forEach(
            (child) => {
                const children = child.children;
                tr.push(...children);
            }
        );

        assert.equal(tr.length, 5);
    });
});
