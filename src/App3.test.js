import React from 'react';
import { shallow } from 'enzyme';
import Bar from './Bar'
import Jaaz from './Jaaz'
import Routes from './Routes'
import { Route } from 'react-router-dom';
import A from './A'
import Nomatch from './NoMatch'
import NoMatch from './NoMatch';

//https://techdoma.in/testing-routes-react-router-dom-in-react-using-jest-1/

let pathMap = {}

describe('routes using array of routers', () => {

    //https://jestjs.io/docs/en/setup-teardown
    //https://jestjs.io/docs/en/setup-teardown#one-time-setup
    //beforeAll is a onetime setup

    beforeAll(() => {


        //https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html#findselector--reactwrapper
        //.find(selector) => ReactWrapper
        //Finds every node in the render tree of the current wrapper that matches the provided selector.

        const component = shallow(<Routes />);

        //reduce will take each route, initialvalue of pathMap is also passed as {}
        pathMap = component.find(Route).reduce((pathMap, route) => {
            //the props of rach route
            //eg { exact: true, path: '/b', component: [Function: B] }
            const routeProps = route.props();

            //adding to pathMap Object
            pathMap[routeProps.path] = routeProps.component;

            return pathMap;
        }, {})


    })

    //https://airbnb.io/enzyme/docs/api/ShallowWrapper/reduce.html#returns
    test('tesing reduce', () => {

        //https://airbnb.io/enzyme/docs/api/ShallowWrapper/reduce.html#reducefn-initialvalue--any
        //.reduce(fn[, initialValue]) => Any
        //Applies the provided reducing function to every node in the wrapper to reduce to a single value.
        // Each node is passed in as a ShallowWrapper, and is processed from left to right.
        const wrapper = shallow(<Bar />)

        //fginding Jaaz components in Bar
        //initialValue (T [optional]): If provided, this will be passed in as the first argument to the first invocation of the reducing function. 
        //If omitted,  the first node will be provided and the iteration will begin on the second node in the collection.

        //        //(amount, n) => amount + n.prop('Jaaz') is the pased in fuction, 0 is initial value

        const total = wrapper.find(Jaaz).reduce((amount, n) => amount + n.prop('amount'), 0)

        expect(total).toEqual(14);
    })


    test('should show  component A for /a route', () => {

        expect(pathMap['/a']).toBe(A);
    })

    test('should show  NoMatch for undefined route', () => { 
        expect(pathMap[undefined]).toBe(NoMatch);
    })
})