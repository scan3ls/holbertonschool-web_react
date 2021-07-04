import App from './App';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notification from './Notifications';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('App', () => {
    it('Does not crash', () => {
        const wrapper = shallow(<App />);
        expect(wrapper);
    });

    describe('App-header', () => {
        it('App renders div with class App-header', () => {
            const node = shallow(<Header />).render()['0'];
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-header');
        });
        
    });

    describe('App-body', () => {
        it('App renders div with class App-body', () => {
            const node = shallow(<Login />).render()['0'];
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-body');
        });
    });

    describe('App-footer', () => {
        it('App renders div with class App-footer', () => {
            const node = shallow(<Footer />).render()['0'];
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-footer');
        });
    });

    describe('Notifications', () => {
        it('Notifications', () => {
            const node = shallow(<Footer />).render()['0'];
            expect(node);
        });
    });
});
