import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Parent from './Parent'


//smoke test” verifying that a component renders without throwing
it('renders without crashing', () => {

    //https://facebook.github.io/create-react-app/docs/running-tests#option-1-shallow-rendering
    //test components in isolation from the child components they render,
  shallow(<App />);
});

//enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because
// Jest provides built-in expect() and jest.fn() for spies.

it('testing element inside a component', () => {
    const wrapper = shallow(<Parent />);
    const child = <div>React Element</div>

    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(child)).toEqual(true);
  });