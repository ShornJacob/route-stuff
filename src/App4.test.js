import React from 'react';
import {  mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
//import { Route } from 'react-router-dom';
import A from './A'
import B from './B'
import Routes from './Routes';

//https://techdoma.in/testing-routes-react-router-dom-in-react-using-jest-2/

//Testing  Routes using MemoryRouter

describe('routes using memory router', () => {
    test('should show A component for /a router (using memory router)', () => {

        //https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913
        // mount Full rendering including child components.

        //https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md
        //A <Router> that keeps the history of your "URL" in memory (does not read or write to the address bar).
        // Useful in tests and non-browser environments like React Native.

        //https://airbnb.io/enzyme/docs/api/mount.html
        //jsdom which is essentially a headless browser implemented completely in JS.

        //ReactWrapper: The wrapper instance around the rendered output.

        const wrapper = mount(
            <MemoryRouter initialEntries={['/a']}>
                <Routes />
            </MemoryRouter>
        )

        //Returns a static HTML rendering of the current node, with intial  entries
        console.log(wrapper.html())

       

        expect(wrapper.find(A)).toHaveLength(1);
    })

})