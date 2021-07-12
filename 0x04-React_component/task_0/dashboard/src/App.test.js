import App from './App';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

const getChild = (className) => {
    const wrapper = render(<App />);
    const children = wrapper['0'].children;
    let node = undefined;
    children.forEach(child => {
        if(child.attribs.class === className) {
            node = child;
            return;
        }
    });
    return node;
};

describe('App', () => {
    it('Does not crash', () => {
        const wrapper = shallow(<App />);
        expect(wrapper);
    });

    describe('App-header', () => {
        it('App renders div with class App-header', () => {
            const node = getChild('App-header');
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-header');
        });
        
    });

    describe('App-body', () => {
        it('App renders div with class App-body', () => {
            const node = getChild('App-body');
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-body');
        });
    });

    describe('App-footer', () => {
        it('App renders div with class App-footer', () => {
            const node = getChild('App-footer');
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-footer');
        });
    });
});
